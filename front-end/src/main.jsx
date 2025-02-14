import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/assets/styles/index.css";
import "./assets/styles/index-aula.css"; // custom stylesheet
import App from "./App.jsx"; // default

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);