import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import App from "../App";
import Login from "../auth/Login";
import Registration from "../auth/Registration";
import Home from "../pages/Home/Home";
import MeetingRooms from "../pages/MeetingRooms/MeetingRooms";
import About from "../pages/About/About";
import Contact from "../pages/contact/Contact";

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
]);

export default router;
