import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";
import { AdminContext } from "../Context/AdminContext";

const Users = () => {
    const baseUrl = useContext(ApiContext);
    const { token } = useContext(AdminContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const res = await axios.get(`${baseUrl}/user/all`, {
                headers: { token }
            });
            setUsers(res.data.data);
        } catch (e) {
            console.log(e.response?.data);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Users</h1>
                <div className="bg-white px-6 py-3 rounded-lg shadow">
                    <p className="text-gray-500 text-sm">Total Users</p>
                    <p className="text-2xl font-bold text-blue-600">{users.length}</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left px-6 py-4">#</th>
                            <th className="text-left px-6 py-4">Name</th>
                            <th className="text-left px-6 py-4">Email</th>
                            <th className="text-left px-6 py-4">Phone Number</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="border-t">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4 font-medium">{user.name}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.mobile}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {users.length === 0 && (
                    <p className="text-center py-8 text-gray-500">
                        No users found
                    </p>
                )}
            </div>
        </div>
    );
};

export default Users;