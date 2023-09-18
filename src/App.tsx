import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PrivateRoutes, PublicRoutes, Roles } from "./models";
import { AuthGuard, RolGuard } from "./guards";
import { Suspense, lazy } from "react";
import { Loading } from "./components";
import { RoutesError } from "./utilities";
import { Dashboard } from "./pages";

const Login = lazy(() => import("./pages/login/Login"));
const Private = lazy(() => import("./pages/private/Private"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesError>
            <Route
              path="/"
              element={<Navigate to={PrivateRoutes.DASHBOARD} />}
            />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />

            <Route element={<AuthGuard privateValidation={true} />}>
              <Route element={<Dashboard />}>
                <Route element={<RolGuard rol={Roles.ADMIN} />}>
                  <Route
                    path={`${PrivateRoutes.DASHBOARD}/*`}
                    element={<Private />}
                  />
                </Route>
              </Route>
            </Route>
          </RoutesError>
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
};

export default App;
