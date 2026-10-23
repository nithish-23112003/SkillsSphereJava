import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AdminContext } from "./Context/AdminContext";

import AdminNavbar from "./Components/AdminNavbar";
import Dashboard from "./Components/Dashboard";
import Courses from "./Components/Courses";
import AddCourse from "./Components/AddCourse";
import CourseInfo from "./Components/CourseInfo";
import AddCourseInfo from "./Components/AddCourseInfo";
import Users from "./Components/Users";
import Results from "./Components/Results";
import Admins from "./Components/Admins";
import Login from "./Components/Login";

const App = () => {
    const { token } = useContext(AdminContext);

    return (
        <BrowserRouter>
            {!token ? (
                <Routes>
                    <Route path="*" element={<Login />} />
                </Routes>
            ) : (
                <>
                    <AdminNavbar />

                    <main className="ml-60 min-h-screen bg-gray-100 p-8">
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/dashboard" />}
                            />

                            <Route
                                path="/dashboard"
                                element={<Dashboard />}
                            />

                            <Route
                                path="/courses"
                                element={<Courses />}
                            />

                            <Route
                                path="/add-course"
                                element={<AddCourse />}
                            />

                            <Route
                                path="/course-info/:id"
                                element={<CourseInfo />}
                            />

                            <Route
                                path="/add-course-info/:id"
                                element={<AddCourseInfo />}
                            />

                            <Route
                                path="/edit-course-info/:infoId/:id"
                                element={<AddCourseInfo />}
                            />

                            <Route
                                path="/users"
                                element={<Users />}
                            />

                            <Route
                                path="/results"
                                element={<Results />}
                            />

                            <Route
                                path="/admins"
                                element={<Admins />}
                            />
                        </Routes>
                    </main>
                </>
            )}
        </BrowserRouter>
    );
};

export default App;