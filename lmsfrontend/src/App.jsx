import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Courses from "./Components/Courses";
import MyCourses from "./Components/MyCourses";
import CourseContent from "./Components/CourseContent";
import Result from "./Components/Result";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
    return (
        <BrowserRouter>

            <Navbar />

            <main className="content">

                <Routes>

                    <Route
                        path="/"
                        element={<Navigate to="/home" />}
                    />

                    <Route
                        path="/home"
                        element={<Home />}
                    />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                    <Route
                        path="/courses"
                        element={<Courses />}
                    />

                    <Route
                        path="/my-courses"
                        element={<MyCourses />}
                    />

                    <Route
                        path="/course-content/:id"
                        element={<CourseContent />}
                    />

                    <Route
                        path="/results"
                        element={<Result />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/register"
                        element={<Register />}
                    />

                </Routes>

            </main>

        </BrowserRouter>
    );
};

export default App;