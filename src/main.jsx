import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Swal from "sweetalert2";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
