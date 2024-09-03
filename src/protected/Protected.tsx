import { jwtDecode } from "jwt-decode";
import { getUser, logout } from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { CustomJwtPayload } from "../Component/verifyToken/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const Protected = ({ children, role }: TProtectedRoute) => {
  const selector = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  // const cuser = useAppSelector(getUser);
  let verify: CustomJwtPayload | null = null; // let verify;
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
