import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

export const PrivateRoutes = () => {
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");
  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};
