import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PrivateRoutes, PublicRoutes } from "./models";
import { AuthGuard } from "./guards";
import { Suspense, lazy } from "react";
import { Loading } from "./components";
import { RoutesError } from "./utilities";

const Login = lazy(() => import("./pages/login/Login"));
const Private = lazy(() => import("./pages/private/Private"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesError>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />

            <Route element={<AuthGuard />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
          </RoutesError>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
};

export default App;
