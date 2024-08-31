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
import BookingForm from "../pages/Booking/BookingForm";
import Payment from "../pages/Payment/Payment";
import CreateRoom from "../pages/AdminDashboard/CreateRoom ";
import AllRooms from "../pages/AdminDashboard/AllRooms";
import CreateSlot from "../pages/AdminDashboard/CreateSlot";
import AllSlots from "../pages/AdminDashboard/AllSlots";
import AllBooking from "../pages/AdminDashboard/AllBooking";
import Payment1 from "../pages/Payment/payment1";
import MyBooking from "../pages/MyBooking/MyBooking";
import UserBooking from "../pages/MyBooking/UserBooking";

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
      {
        path: "/booking/:roomId",
        element: <BookingForm />,
      },
      {
        path: "/booking-payment/:id",
        element: <Payment />,
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
    path: "/my-bookings",
    element: (
      <Protected role="user">
        <MyBooking />
      </Protected>
    ),
    children: [
      {
        index: true,
        element: <UserBooking />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <Protected role="user">
        <AdminDashboard />
      </Protected>
    ),
    children: [
      {
        path: "create-room",
        element: <CreateRoom />,
      },
      {
        path: "all-rooms",
        element: <AllRooms />,
      },
      {
        path: "create-slots",
        element: <CreateSlot />,
      },
      {
        path: "all-slots",
        element: <AllSlots />,
      },
      {
        path: "all-booking",
        element: <AllBooking />,
      },
    ],
  },
]);

export default router;
