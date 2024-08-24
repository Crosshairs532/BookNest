import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import App from "../App";
import Login from "../auth/Login";
import Registration from "../auth/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
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
