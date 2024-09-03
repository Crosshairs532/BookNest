import { jwtDecode, JwtPayload } from "jwt-decode";
export interface CustomJwtPayload extends JwtPayload {
  role?: string;
}

export const verifyToken = (token: string) => {
  return jwtDecode<CustomJwtPayload>(token);
};
