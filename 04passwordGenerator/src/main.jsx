import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="text-3xl text-white font-bold underline bg-red-500 p-6 border-2 rounded-lg mb-3">
      Password Generator
    </h1>
    <App />
  </StrictMode>
);
