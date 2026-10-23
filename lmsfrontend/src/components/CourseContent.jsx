import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";
import "../CSS/CourseContent.css";

const CourseContent = () => {
    const { id } = useParams();
    const baseUrl = useContext(ApiContext);

    const [courseInfo, setCourseInfo] = useState([]);
    const [openContent, setOpenContent] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

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

            console.log(res.data);
            setCourseInfo(res.data.data);

        } catch (e) {
            console.log(e.response?.data);
        }
    };

    const handleDropdown = (infoId) => {
        if (openContent === infoId) {
            setOpenContent(null);
        } else {
            setOpenContent(infoId);
        }
    };

    const playVideo = (title, link) => {
        setSelectedVideo({
            title: title,
            link: link
        });
    };

    const closeVideo = () => {
        setSelectedVideo(null);
    };

    if (!courseInfo.length) {
        return (
            <div className="course-loading">
                Loading...
            </div>
        );
    }

    return (
        <div className="course-content-page">

            <div className="course-header">
                <h2>Course Content</h2>
            </div>

            <div className="course-layout">

                <div className="content-container">

                    {courseInfo.map((info) => (

                        <div
                            className="course-section"
                            key={info.id}
                        >

                            <div
                                className="section-header"
                                onClick={() => handleDropdown(info.id)}
                            >

                                <div className="section-icon">
                                    🎓
                                </div>

                                <div className="section-title">
                                    <h3>{info.title}</h3>

                                    <p>
                                        {Object.keys(info.videoDetail).length} videos
                                    </p>
                                </div>

                                <div className="arrow">
                                    {openContent === info.id ? "▲" : "▼"}
                                </div>

                            </div>

                            {openContent === info.id && (

                                <div className="video-list">

                                    {Object.entries(info.videoDetail).map(
                                        ([videoTitle, videoLink]) => (

                                            <div
                                                className="video-item"
                                                key={videoTitle}
                                                onClick={() =>
                                                    playVideo(
                                                        videoTitle,
                                                        videoLink
                                                    )
                                                }
                                            >

                                                <span className="video-icon">
                                                    🎬
                                                </span>

                                                <span className="video-title">
                                                    {videoTitle}
                                                </span>

                                            </div>

                                        )
                                    )}

                                </div>
                            )}

                        </div>

                    ))}

                </div>

                {selectedVideo && (

                    <div className="video-player-container">

                        <button
                            className="close-video"
                            onClick={closeVideo}
                        >
                            ✕
                        </button>

                        <h3>{selectedVideo.title}</h3>

                        <video
                            controls
                            autoPlay
                            src={selectedVideo.link}
                        >
                            Your browser does not support video.
                        </video>

                    </div>

                )}

            </div>

        </div>
    );
};

export default CourseContent;