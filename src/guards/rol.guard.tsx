import { PrivateRoutes, Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  rol: Roles | string;
}

const RolGuard = ({ rol = "" }: Props) => {
  const userState = useSelector((state: AppStore) => state.user);

  return userState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={PrivateRoutes.DASHBOARD} />
  );
};

export default RolGuard;
