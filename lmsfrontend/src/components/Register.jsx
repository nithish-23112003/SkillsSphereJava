import { useContext, useState } from "react";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";
import { useNavigate } from "react-router-dom";
import "../CSS/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const baseUrl = useContext(ApiContext);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post(`${baseUrl}/user/register`, {
                name,
                email,
                mobile: number,
                password
            });

            if (res.status === 201) {
                navigate("/home");
            }

        } catch (e) {
            setError(e.response?.data?.msg);
        }
    }

    return (
        <div className="register-page">

            <div className="register-card">

                <h1>Create Account</h1>
                <p className="subtitle">
                    Register to get started
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input
                            type="tel"
                            id="mobile"
                            placeholder="Enter your mobile number"
                            value={number}
                            onChange={(e) =>
                                setNumber(e.target.value)
                            }
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />
                    </div>

                    {error && (
                        <p className="error-message">
                            {error}
                        </p>
                    )}

                    <button type="submit">
                        Register
                    </button>

                    <p className="login-link">
    Already have an account?{" "}
    <Link to="/login">Sign in</Link>
</p>

                </form>

            </div>

        </div>
    );
};

export default Register;