import { jwtDecode } from "jwt-decode";
import { getUser, logout } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Navigate } from "react-router-dom";

const Protected = ({ children, role }) => {
  const selector = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const cuser = useAppSelector(getUser);
  let verify;
  if (selector.token) {
    verify = jwtDecode(selector.token);
  }

  if (verify?.role === role) {
    return children;
  }

  if (verify?.role != role || !selector.token) {
    dispatch(logout());
    return <Navigate to="/login" replace={true}></Navigate>;
  }
};

export default Protected;
