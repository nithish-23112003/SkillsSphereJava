import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";

const CourseInfo = () => {
    const { id } = useParams();
    const baseUrl = useContext(ApiContext);
    const navigate = useNavigate();

    const [courseInfo, setCourseInfo] = useState([]);

    useEffect(() => {
        getCourseInfo();
    }, [id]);

    const getCourseInfo = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get(
                `${baseUrl}/courseinfo/${id}`,
                {
                    headers: {
                        token: token
                    }
                }
            );

            setCourseInfo(res.data.data);
        } catch (e) {
            console.log(e.response?.data);
        }
    };

    const deleteCourseInfo = async (infoId) => {
        if (!window.confirm("Delete this course information?")) {
            return;
        }

        try {
            const token = localStorage.getItem("token");

            await axios.delete(
                `${baseUrl}/courseinfo/${infoId}`,
                {
                    headers: {
                        token: token
                    }
                }
            );

            getCourseInfo();
        } catch (e) {
            console.log(e.response?.data);
        }
    };

    return (
        <div>

            <div className="flex justify-between items-center mb-8">

                <div>
                    <button
                        onClick={() => navigate("/courses")}
                        className="text-blue-600 mb-3"
                    >
                        ← Back to Courses
                    </button>

                    <h1 className="text-3xl font-bold text-gray-800">
                        Course Information
                    </h1>
                </div>

                <button
                    onClick={() =>
                        navigate(`/add-course-info/${id}`)
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded"
                >
                    + Add Course Info
                </button>

            </div>

            <div className="space-y-5">

                {courseInfo.map((info) => (
                    <div
                        key={info.id}
                        className="bg-white rounded-lg shadow p-6"
                    >

                        <div className="flex justify-between items-center">

                            <h2 className="text-xl font-bold text-gray-800">
                                {info.title}
                            </h2>

                            <div className="flex gap-2">

                                <button
                                    onClick={() =>
                                        navigate(
                                            `/edit-course-info/${info.id}/${id}`
                                        )
                                    }
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() =>
                                        deleteCourseInfo(info.id)
                                    }
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                        <div className="mt-5">

                            <h3 className="font-semibold text-gray-700 mb-3">
                                Videos
                            </h3>

                            <div className="space-y-2">

                                {info.videoDetail &&
                                    Object.entries(info.videoDetail).map(
                                        ([title, link]) => (
                                            <div
                                                key={title}
                                                className="border rounded p-3 flex justify-between"
                                            >
                                                <span>
                                                    {title}
                                                </span>

                                                <a
                                                    href={link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-blue-600"
                                                >
                                                    View Video
                                                </a>
                                            </div>
                                        )
                                    )}

                            </div>

                        </div>

                    </div>
                ))}

            </div>

            {courseInfo.length === 0 && (
                <div className="bg-white p-10 text-center rounded-lg shadow text-gray-500">
                    No course information available
                </div>
            )}

        </div>
    );
};

export default CourseInfo;