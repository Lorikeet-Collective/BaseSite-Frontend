import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import "./desktop-index.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <HashRouter>
        <App />
    </HashRouter>
);
