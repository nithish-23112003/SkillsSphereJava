import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";
import { useNavigate } from "react-router-dom";
import "../CSS/MyCourses.css";

const MyCourses = () => {
    const baseUrl = useContext(ApiContext);
    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getMyCourses();
    }, []);

    const getMyCourses = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
            return;
        }

        try {

            const res = await axios.get(
                `${baseUrl}/course/user`,
                {
                    headers: {
                        token: token
                    }
                }
            );

            console.log("My courses:", res.data);

            setCourses(res.data.data);

        } catch (e) {

            console.log(
                "My courses error:",
                e.response?.data
            );

            if (e.response?.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login");
            }
        }
    };

    return (
        <div className="container my-courses">

            <h1 className="text-center mb-4">
                My Courses
            </h1>

            {courses.length === 0 ? (

                <div className="text-center">

                    <p>
                        You have not enrolled in any course.
                    </p>

                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/courses")}
                    >
                        Explore Courses
                    </button>

                </div>

            ) : (

                <div className="row g-4">

                    {courses.map((course) => (

                        <div
                            className="col-md-4"
                            key={course.courseId}
                        >

                            <div className="my-course-card">

                                <img
                                    src={course.image}
                                    alt={course.title}
                                />

                                <div className="p-3">

                                    <h4>
                                        {course.title}
                                    </h4>

                                    <p>
                                        {course.description}
                                    </p>

                                    <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                            navigate(
                                                `/course-content/${course.courseId}`
                                            )
                                        }
                                    >
                                        View Course
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default MyCourses;