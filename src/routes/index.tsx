import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/main";
// guards
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
// components
import LoadingScreen from "../components/LoadingScreen";

// ----------------------------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/main");

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            }),
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "register",
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          ),
        },
        { path: "login-unprotected", element: <Login /> },
        { path: "register-unprotected", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Navigate to="/main" replace /> },
        // Dashboard Routes
      ],
    },
    {
      path: "main",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        { path: "/", element: <Navigate to="/main/home" replace /> },
        { path: "home", element: <Home /> },
        { path: "weather", element: <Weather /> },
        { path: "tasks", element: <Tasks /> },
        { path: "food", element: <Food /> },
        { path: "movies", element: <Movies /> },
        { path: "games", element: <Games /> },
      ],
    },
    { path: "404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// Authentication
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Register = Loadable(lazy(() => import("../pages/auth/Register")));
const NotFound = Loadable(lazy(() => import("../pages/other/NotFound")));
// Dashboard
const Home = Loadable(lazy(() => import("../pages/main/Home")));
const Games = Loadable(lazy(() => import("../pages/main/Games")));
const Movies = Loadable(lazy(() => import("../pages/main/Movies")));
const Food = Loadable(lazy(() => import("../pages/main/Food")));
const Tasks = Loadable(lazy(() => import("../pages/main/Tasks")));
const Weather = Loadable(lazy(() => import("../pages/main/Weather")));
