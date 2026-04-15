import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage/HomePage";
import Timeline from "./pages/timeline/Timeline";
import Stats from "./pages/status/Stats";
import NotFound from "./pages/notfoundpage/NotFound";
import NotFoundPage from "./pages/notfoundpage/NotFound";
import FriendsDetails from "./pages/friendsdetails/FriendsDetails";
import FriendProvider from "./context/FriendContex";
import { ToastContainer } from "react-toastify";

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
         path: '/friendsDetails/:id',
         loader: () => fetch("/friends.json"),
         Component: FriendsDetails,
      },
      {
        path: "/stats",
        Component: Stats,
      }
    ],
    errorElement: <NotFoundPage></NotFoundPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" />
    </FriendProvider>
  </StrictMode>,
);
