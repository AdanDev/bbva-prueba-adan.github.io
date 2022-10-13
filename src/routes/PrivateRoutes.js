import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar";

const PrivateRoutes = () => {
  const userName = useSelector((state) => state.registry.userName);

  return userName ? (
    <>
      <Navbar userName={userName} />
      <Outlet />
    </>
  ) : (
    <Navigate to="/home" />
  );
};

export default PrivateRoutes;
