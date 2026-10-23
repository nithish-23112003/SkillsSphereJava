import { useContext, useState } from "react";
import { ApiContext } from "../Context/ApiContext";
import { UserContext } from "../Context/UserContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../CSS/Register.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const baseUrl = useContext(ApiContext);
    const { loginUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        try {
            const res = await axios.post(
                `${baseUrl}/user/login`,
                {
                    email: email,
                    password: password
                }
            );

            console.log("LOGIN RESPONSE");
            console.log(res.data);

            const data = res.data.data;

            console.log("LOGIN DATA");
            console.log(data);

            if (data && data.token) {
                localStorage.setItem("token", data.token);
            }

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }

            if (data) {
                loginUser(data);
            }

            console.log(
                "TOKEN:",
                localStorage.getItem("token")
            );

            navigate("/home");

        } catch (e) {

            console.log("LOGIN ERROR");
            console.log(e.response?.data);

            setError(
                e.response?.data?.msg ||
                e.response?.data?.message ||
                "Invalid email or password"
            );
        }
    };

    return (
        <div className="register-page">

            <div className="register-box">

                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter your email"
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="Enter your password"
                            required
                        />

                    </div>

                    {error && (
                        <p className="text-danger">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>

                <p className="login-link">
                    Don't have an account?{" "}
                    <Link to="/register">
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Login;