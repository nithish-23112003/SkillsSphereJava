import { createContext, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(() => {
        const data = localStorage.getItem("admin");
        return data ? JSON.parse(data) : null;
    });

    const [token, setToken] = useState(() => {
        return localStorage.getItem("token");
    });

    const loginAdmin = (adminData) => {
        setAdmin(adminData);
        setToken(adminData.token);

        localStorage.setItem("admin", JSON.stringify(adminData));
        localStorage.setItem("token", adminData.token);
    };

    const logoutAdmin = () => {
        setAdmin(null);
        setToken(null);

        localStorage.removeItem("admin");
        localStorage.removeItem("token");
    };

    return (
        <AdminContext.Provider
            value={{ admin, token, loginAdmin, logoutAdmin }}
        >
            {children}
        </AdminContext.Provider>
    );
};