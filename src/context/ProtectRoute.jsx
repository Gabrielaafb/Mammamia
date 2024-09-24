import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const ProtectRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  return token ? children : <Navigate to="/login" />;
};

export default ProtectRoute;
