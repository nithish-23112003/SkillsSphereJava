import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AdminContext } from "../Context/AdminContext";

const AdminNavbar = () => {
    const { admin, logoutAdmin } = useContext(AdminContext);
    const navigate = useNavigate();

    const logout = () => {
        logoutAdmin();
        navigate("/");
    };

    return (
        <div className="fixed left-0 top-0 w-60 h-screen bg-gray-800 text-white flex flex-col p-5">

            <div className="text-2xl font-bold px-3 pb-6 border-b border-gray-700">
                LMS
                <span className="block text-xs font-normal text-gray-400 mt-1">
                    Admin Panel
                </span>
            </div>

            <div className="flex flex-col mt-6 gap-2">

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `px-3 py-3 rounded ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-700"
                        }`
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                        `px-3 py-3 rounded ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-700"
                        }`
                    }
                >
                    Courses
                </NavLink>

                <NavLink
                    to="/users"
                    className={({ isActive }) =>
                        `px-3 py-3 rounded ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-700"
                        }`
                    }
                >
                    Users
                </NavLink>

                <NavLink
                    to="/results"
                    className={({ isActive }) =>
                        `px-3 py-3 rounded ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-700"
                        }`
                    }
                >
                    Results
                </NavLink>

                <NavLink
                    to="/admins"
                    className={({ isActive }) =>
                        `px-3 py-3 rounded ${
                            isActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-300 hover:bg-gray-700"
                        }`
                    }
                >
                    Admins
                </NavLink>

            </div>

            <div className="mt-auto border-t border-gray-700 pt-5">

                {admin && (
                    <div className="px-3 pb-4 text-sm text-gray-300">
                        {admin.name}
                    </div>
                )}

                <button
                    onClick={logout}
                    className="w-full bg-red-600 hover:bg-red-700 py-2 rounded"
                >
                    Logout
                </button>

            </div>
        </div>
    );
};

export default AdminNavbar;