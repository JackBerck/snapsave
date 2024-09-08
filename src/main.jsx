import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/";
import FacebookPage from "./pages/facebook";
import InstagramPage from "./pages/instagram";
import TwitterPage from "./pages/twitter";
import TiktokPage from "./pages/tiktok";
import YoutubePage from "./pages/youtube";
import "./index.css";

// Buat objek router menggunakan createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/youtube",
    element: <YoutubePage />,
  },
  {
    path: "/facebook",
    element: <FacebookPage />,
  },
  {
    path: "/instagram",
    element: <InstagramPage />,
  },
  {
    path: "/twitter",
    element: <TwitterPage />,
  },
  {
    path: "/tiktok",
    element: <TiktokPage />,
  },
]);

// Render aplikasi dengan RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
