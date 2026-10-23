import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";

const Courses = () => {
    const baseUrl = useContext(ApiContext);
    const navigate = useNavigate();

    const [courses, setCourses] = useState([]);
    const [myCourses, setMyCourses] = useState([]);

    useEffect(() => {
        getCourses();
        getMyCourses();
    }, []);

    const getCourses = async () => {
        try {
            const res = await axios.get(`${baseUrl}/course`);

            console.log(res.data);

            setCourses(res.data.data);
        } catch (e) {
            console.log(e.response?.data);
        }
    };

    const getMyCourses = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setMyCourses([]);
                return;
            }

            const res = await axios.get(
                `${baseUrl}/course/user`,
                {
                    headers: {
                        token: token
                    }
                }
            );

            console.log(res.data);

            setMyCourses(res.data.data);
        } catch (e) {
            console.log(e.response?.data);
        }
    };

    const isCourseAvailable = (courseId) => {
        return myCourses.some(
            (course) => course.courseId === courseId
        );
    };

    const enrollCourse = async (courseId) => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/login");
                return;
            }

            await axios.post(
                `${baseUrl}/course/buy/${courseId}`,
                {},
                {
                    headers: {
                        token: token
                    }
                }
            );

            alert("Course enrolled successfully");

            getMyCourses();

        } catch (e) {
            console.log(e.response?.data);
        }
    };

    return (
        <div className="container mt-4">

            <h2 className="mb-4">Courses Available</h2>

            <div className="row g-4">

                {courses.map((course) => {

                    const alreadyEnrolled =
                        isCourseAvailable(course.courseId);

                    return (
                        <div
                            className="col-lg-3 col-md-4 col-sm-6"
                            key={course.courseId}
                        >

                            <div
                                className="card h-100 shadow-sm"
                                style={{ width: "18rem" }}
                            >

                                <img
                                    className="card-img-top"
                                    src={course.image}
                                    alt={course.title}
                                    style={{
                                        height: "160px",
                                        objectFit: "cover"
                                    }}
                                />

                                <div className="card-body">

                                    <h5 className="card-title">
                                        {course.title}
                                    </h5>

                                    <p className="card-text">
                                        Description: {course.description}
                                    </p>

                                    <div className="d-flex justify-content-between align-items-center">

                                        {!alreadyEnrolled && (
                                            <span className="fw-bold">
                                                Price: ₹{course.price}
                                            </span>
                                        )}

                                        {alreadyEnrolled ? (

                                            <button
                                                className="btn btn-success"
                                                onClick={() =>
                                                    navigate(
                                                        `/course-content/${course.courseId}`
                                                    )
                                                }
                                            >
                                                View Course
                                            </button>

                                        ) : (

                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    enrollCourse(
                                                        course.courseId
                                                    )
                                                }
                                            >
                                                Enroll Course
                                            </button>

                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default Courses;