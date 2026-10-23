import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";

const AddCourseInfo = () => {
    const { id, infoId } = useParams();
    const baseUrl = useContext(ApiContext);
    const navigate = useNavigate();

    const editMode = Boolean(infoId);

    const [title, setTitle] = useState("");
    const [videos, setVideos] = useState([
        {
            title: "",
            file: null,
            oldLink: ""
        }
    ]);

    useEffect(() => {
        if (editMode) {
            getCourseInfo();
        }
    }, [infoId]);

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

            const info = res.data.data.find(
                (item) => item.id === Number(infoId)
            );

            if (!info) {
                return;
            }

            setTitle(info.title);

            const videoList = Object.entries(
                info.videoDetail || {}
            ).map(([title, link]) => ({
                title: title,
                file: null,
                oldLink: link
            }));

            setVideos(
                videoList.length > 0
                    ? videoList
                    : [{ title: "", file: null, oldLink: "" }]
            );

        } catch (e) {
            console.log(e.response?.data);
        }
    };

    const addVideo = () => {
        setVideos([
            ...videos,
            {
                title: "",
                file: null,
                oldLink: ""
            }
        ]);
    };

    const removeVideo = (index) => {
        const newVideos = videos.filter((_, i) => i !== index);
        setVideos(newVideos);
    };

    const updateVideoTitle = (index, value) => {
        const newVideos = [...videos];
        newVideos[index].title = value;
        setVideos(newVideos);
    };

    const updateVideoFile = (index, file) => {
        const newVideos = [...videos];
        newVideos[index].file = file;
        setVideos(newVideos);
    };

    const saveCourseInfo = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const videoDetail = {};

            videos.forEach((video) => {
                videoDetail[video.title] = video.oldLink || "";
            });

            const info = {
                title: title,
                videoDetail: videoDetail
            };

            const formData = new FormData();

            formData.append(
                "info",
                new Blob([JSON.stringify(info)], {
                    type: "application/json"
                })
            );

            if (editMode) {
                formData.append("c_id", id);

                videos.forEach((video) => {
                    if (video.file) {
                        formData.append("video", video.file);
                    }
                });

                videos.forEach((video) => {
                    formData.append("videoTitle", video.title);
                });

                await axios.put(
                    `${baseUrl}/courseinfo/${infoId}`,
                    formData,
                    {
                        headers: {
                            token: token
                        }
                    }
                );
            } else {
                videos.forEach((video) => {
                    formData.append("video", video.file);
                });

                await axios.post(
                    `${baseUrl}/courseinfo/${id}`,
                    formData,
                    {
                        headers: {
                            token: token
                        }
                    }
                );
            }

            navigate(`/course-info/${id}`);

        } catch (e) {
            console.log(e.response?.data);
        }
    };

    return (
        <div className="max-w-3xl">

            <button
                onClick={() => navigate(`/course-info/${id}`)}
                className="text-blue-600 mb-5"
            >
                ← Back
            </button>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                {editMode
                    ? "Edit Course Information"
                    : "Add Course Information"}
            </h1>

            <form
                onSubmit={saveCourseInfo}
                className="bg-white p-7 rounded-lg shadow"
            >

                <label className="block font-medium mb-2">
                    Course Info Title
                </label>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter course information title"
                    className="w-full border border-gray-300 p-3 rounded mb-6"
                    required
                />

                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-xl font-semibold">
                        Videos
                    </h2>

                    <button
                        type="button"
                        onClick={addVideo}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    >
                        + Add Video
                    </button>

                </div>

                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded p-5 mb-4"
                    >

                        <div className="flex justify-between mb-4">

                            <h3 className="font-semibold">
                                Video {index + 1}
                            </h3>

                            {videos.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeVideo(index)}
                                    className="text-red-600"
                                >
                                    Remove
                                </button>
                            )}

                        </div>

                        <input
                            type="text"
                            placeholder="Video title"
                            value={video.title}
                            onChange={(e) =>
                                updateVideoTitle(
                                    index,
                                    e.target.value
                                )
                            }
                            className="w-full border border-gray-300 p-3 rounded mb-3"
                            required
                        />

                        {editMode && video.oldLink && (
                            <div className="text-sm text-gray-500 mb-3">
                                Existing video available
                            </div>
                        )}

                        <input
                            type="file"
                            accept="video/*"
                            onChange={(e) =>
                                updateVideoFile(
                                    index,
                                    e.target.files[0]
                                )
                            }
                            className="w-full border border-gray-300 p-3 rounded"
                        />

                    </div>
                ))}

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
                >
                    {editMode
                        ? "Update Course Information"
                        : "Add Course Information"}
                </button>

            </form>

        </div>
    );
};

export default AddCourseInfo;