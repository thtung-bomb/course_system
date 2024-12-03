import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

export const PublicRoutes = () => {
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken");
  return accessToken ? <Navigate to="/" /> : <Outlet />;
};
