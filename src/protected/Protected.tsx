import { jwtDecode } from "jwt-decode";
import { getUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hook";
import { Navigate } from "react-router-dom";

const Protected = ({ children, role }) => {
  const selector = useAppSelector(getUser);
  const cuser = useAppSelector(getUser);
  let verify;
  if (selector.token) {
    verify = jwtDecode(selector.token);
  }

  if (verify?.role === role) {
    return children;
  }

  return <Navigate to="/login" replace={true}></Navigate>;
};

export default Protected;
