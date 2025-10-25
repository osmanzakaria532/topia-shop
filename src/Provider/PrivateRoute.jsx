import { use } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(loading);

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }
  return (
    <Navigate
      state={location.pathname}
      to="/login"
    />
  );
};

export default PrivateRoute;
