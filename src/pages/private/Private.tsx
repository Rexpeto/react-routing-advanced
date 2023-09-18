import { Route } from "react-router-dom";
import { lazy } from "react";
import { RoutesError } from "@/utilities";

const Home = lazy(() => import("./home/Home"));

const Private = () => {
  return (
    <RoutesError>
      <Route path="/" element={<Home />} />
    </RoutesError>
  );
};

export default Private;
