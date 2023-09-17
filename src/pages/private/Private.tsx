import { PrivateRoutes } from "@/models";
import { Navigate, Route } from "react-router-dom";
import { lazy } from "react";
import { RoutesError } from "@/utilities";

const Dashboard = lazy(() => import("../dashboard/Dashboard"));
const Home = lazy(() => import("./home/Home"));

const Private = () => {
  return (
    <RoutesError>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
    </RoutesError>
  );
};

export default Private;
