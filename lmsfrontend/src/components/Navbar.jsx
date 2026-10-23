import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import "../CSS/Navbar.css";

const Navbar = () => {
    const { logoutUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    const handleLogout = () => {
        logoutUser();
        setToken(null);
        navigate("/login");
    };

    return (
        <nav className="navbar">

            <div className="logo">
                LMS
            </div>

            <div className="nav-links">

                <NavLink to="/home">
                    Home
                </NavLink>

                <NavLink to="/about">
                    About
                </NavLink>

                <NavLink to="/courses">
                    Courses Available
                </NavLink>

                <NavLink to="/results">
                    Results
                </NavLink>

                {token && (
                    <NavLink to="/my-courses">
                        My Courses
                    </NavLink>
                )}

            </div>

            <div className="auth">

                {token ? (
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <NavLink to="/login">
                        Login
                    </NavLink>
                )}

            </div>

        </nav>
    );
};

export default Navbar;