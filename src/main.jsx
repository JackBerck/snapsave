import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import "./index.css";

// Buat objek router menggunakan createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

// Render aplikasi dengan RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
