import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";
import { AdminContext } from "../Context/AdminContext";

const Dashboard = () => {
    const baseUrl = useContext(ApiContext);
    const { token } = useContext(AdminContext);

    const [courses, setCourses] = useState([]);
    const [users, setUsers] = useState([]);
    const [results, setResults] = useState([]);
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        getDashboardData();
    }, []);

    const getDashboardData = async () => {
        try {
            const courseRes = await axios.get(`${baseUrl}/course`);

            const userRes = await axios.get(`${baseUrl}/user/all`, {
                headers: { token }
            });

            const resultRes = await axios.get(`${baseUrl}/result`);

            const adminRes = await axios.get(`${baseUrl}/admin/all`, {
                headers: { token }
            });

            setCourses(courseRes.data.data || []);
            setUsers(userRes.data.data || []);
            setResults(resultRes.data.data || []);
            setAdmins(adminRes.data.data || []);
        } catch (e) {
            console.log(e.response?.data);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">
                Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
                Welcome to LMS Admin Panel
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500">
                        Courses
                    </h2>

                    <p className="text-3xl font-bold text-blue-600 mt-2">
                        {courses.length}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500">
                        Users
                    </h2>

                    <p className="text-3xl font-bold text-blue-600 mt-2">
                        {users.length}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500">
                        Results
                    </h2>

                    <p className="text-3xl font-bold text-blue-600 mt-2">
                        {results.length}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-gray-500">
                        Admins
                    </h2>

                    <p className="text-3xl font-bold text-blue-600 mt-2">
                        {admins.length}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;