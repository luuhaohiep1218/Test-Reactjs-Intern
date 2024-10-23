import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login") || "")
    : null;

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
