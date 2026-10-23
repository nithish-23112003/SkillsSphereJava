import { createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const baseUrl = "http://localhost:5000";

    return (
        <ApiContext.Provider value={baseUrl}>
            {children}
        </ApiContext.Provider>
    );
};