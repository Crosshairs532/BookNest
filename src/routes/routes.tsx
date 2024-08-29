import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import App from "../App";
import Login from "../auth/Login";
import Registration from "../auth/Registration";
import Home from "../pages/Home/Home";
import MeetingRooms from "../pages/MeetingRooms/MeetingRooms";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";
import MYBookings from "../pages/MYBookings/MYBookings";
import Protected from "../protected/Protected";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import RoomDetails from "../pages/RoomDetails/RoomDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/meeting-rooms",
        element: <MeetingRooms />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/meeting-rooms/details/:id",
        element: <RoomDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/:id/my-bookings",
    element: (
      <Protected>
        <MYBookings />
      </Protected>
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <Protected>
        <AdminDashboard />
      </Protected>
    ),
  },
]);

export default router;
