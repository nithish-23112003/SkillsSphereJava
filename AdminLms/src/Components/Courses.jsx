import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";
import { useNavigate } from "react-router-dom";

const Courses = () => {
    const baseUrl = useContext(ApiContext);
    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        try {
            const res = await axios.get(`${baseUrl}/course`);
            setCourses(res.data.data);
        } catch (e) {
            console.log(e.response?.data);
        }
    };

    const deleteCourse = async (id) => {
        if (!window.confirm("Are you sure you want to delete this course?")) {
            return;
        }

        try {
            const token = localStorage.getItem("token");

            await axios.delete(`${baseUrl}/course/${id}`, {
                headers: {
                    token: token
                }
            });

            getCourses();
        } catch (e) {
            console.log(e.response?.data);
        }
    };

    return (
        <div>

            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Courses
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Manage all courses
                    </p>
                </div>

                <button
                    onClick={() => navigate("/add-course")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
                >
                    + Add Course
                </button>
            </div>

            <div className="grid grid-cols-3 gap-6">

                {courses.map((course) => (
                    <div
                        key={course.courseId}
                        className="bg-white rounded-lg shadow overflow-hidden"
                    >

                        <img
                            src={course.image}
                            alt={course.courseName}
                            className="w-full h-44 object-cover"
                        />

                        <div className="p-5">

                            <h2 className="text-xl font-bold text-gray-800">
                                {course.courseName}
                            </h2>

                            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                                {course.description}
                            </p>

                            <div className="flex justify-between items-center mt-4">
                                <span className="font-bold text-lg">
                                    ₹{course.price}
                                </span>

                                <span className="text-sm text-gray-500">
                                    ID: {course.courseId}
                                </span>
                            </div>

                            <div className="flex gap-2 mt-5">

                                <button
                                    onClick={() =>
                                        navigate(
                                            `/course-info/${course.courseId}`
                                        )
                                    }
                                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
                                >
                                    Course Info
                                </button>

                                <button
                                    onClick={() =>
                                        deleteCourse(course.courseId)
                                    }
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {courses.length === 0 && (
                <div className="text-center mt-16 text-gray-500">
                    No courses available
                </div>
            )}

        </div>
    );
};

export default Courses;