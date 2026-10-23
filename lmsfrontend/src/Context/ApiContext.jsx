import { createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const baseURL = "http://localhost:5000";

    return (
        <ApiContext.Provider value={baseURL}>
            {children}
        </ApiContext.Provider>
    );
};