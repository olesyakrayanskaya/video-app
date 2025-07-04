import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./normalize.css";
import "./index.css";
import { ThemeProvider } from "./ThemeProvider.jsx";
import MainRoutes from "./MainRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <MainRoutes />
    </ThemeProvider>
  </StrictMode>
);
