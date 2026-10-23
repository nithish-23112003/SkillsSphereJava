import { useContext, useState } from "react";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
    const baseUrl = useContext(ApiContext);
    const navigate = useNavigate();

    const [courseName, setCourseName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const addCourse = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            const course = {
                courseName: courseName,
                price: Number(price),
                description: description
            };

            const formData = new FormData();

            formData.append(
                "c",
                new Blob([JSON.stringify(course)], {
                    type: "application/json"
                })
            );

            formData.append("image", image);

            await axios.post(
                `${baseUrl}/course`,
                formData,
                {
                    headers: {
                        token: token
                    }
                }
            );

            navigate("/courses");

        } catch (e) {
            console.log(e.response?.data);
        }
    };

    return (
        <div className="max-w-2xl">

            <button
                onClick={() => navigate("/courses")}
                className="text-blue-600 mb-5"
            >
                ← Back to Courses
            </button>

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Add Course
            </h1>

            <form
                onSubmit={addCourse}
                className="bg-white p-7 rounded-lg shadow"
            >

                <label className="block mb-2 font-medium">
                    Course Name
                </label>

                <input
                    type="text"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    placeholder="Enter course name"
                    className="w-full border border-gray-300 p-3 rounded mb-5"
                    required
                />

                <label className="block mb-2 font-medium">
                    Price
                </label>

                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price"
                    className="w-full border border-gray-300 p-3 rounded mb-5"
                    required
                />

                <label className="block mb-2 font-medium">
                    Description
                </label>

                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter course description"
                    rows="5"
                    className="w-full border border-gray-300 p-3 rounded mb-5"
                    required
                />

                <label className="block mb-2 font-medium">
                    Course Image
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full border border-gray-300 p-3 rounded mb-6"
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
                >
                    Add Course
                </button>

            </form>

        </div>
    );
};

export default AddCourse;