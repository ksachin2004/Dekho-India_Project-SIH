import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./resets.css";
import "./utils.css";
import "./index.css"; // Ensure this contains necessary global styles

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Background Video Component */}
    <div className="background-video-container">
      <video className="background-video" autoPlay loop muted>
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <RouterProvider router={router} />
  </StrictMode>
);
