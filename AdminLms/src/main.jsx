import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ApiProvider } from "./Context/ApiContext.jsx";
import { AdminProvider } from "./Context/AdminContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
   
        <ApiProvider>
            <AdminProvider>
                <App />
            </AdminProvider>
        </ApiProvider>
    
);