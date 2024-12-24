import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Loading/Loading";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;
