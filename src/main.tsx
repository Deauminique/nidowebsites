import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.css";

// Import all our custom styles
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/services.css";
import "./styles/process.css";
import "./styles/portfolio.css";
import "./styles/contact.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
