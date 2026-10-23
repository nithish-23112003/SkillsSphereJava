import { useContext, useState } from "react";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";
import { AdminContext } from "../Context/AdminContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const baseUrl = useContext(ApiContext);
    const { loginAdmin } = useContext(AdminContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const login = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post(`${baseUrl}/user/login`, {
                email,
                password
            });

            const data = res.data.data;
            console.log(data)

            loginAdmin(data);

            navigate("/dashboard");
        } catch (e) {
            setError(
                e.response?.data?.msg ||
                e.response?.data?.message ||
                "Invalid email or password"
            );
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <form
                onSubmit={login}
                className="bg-white w-96 p-8 rounded-lg shadow"
            >

                <h1 className="text-2xl font-bold text-center mb-6">
                    LMS Admin Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                    }}
                    className="w-full border p-3 rounded mb-4"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                    }}
                    className="w-full border p-3 rounded"
                    required
                />

                {error && (
                    <p className="text-red-600 text-sm mt-3">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 mt-5"
                >
                    Login
                </button>

            </form>
        </div>
    );
};

export default Login;