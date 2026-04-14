import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage/HomePage";
import Timeline from "./pages/timeline/Timeline";
import Stats from "./pages/status/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
         index: true,
         Component: HomePage,
      },
      {
        path: "/timeline",
        Component: Timeline
      },
      {
        path: "/stats",
        Component: Stats,
      }
    ],
    errorElement: <h2>404 not found</h2>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
