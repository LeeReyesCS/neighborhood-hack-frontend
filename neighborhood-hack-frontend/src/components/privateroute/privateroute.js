import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = ({ children, jwt }) => {
  const navigate = useNavigate()

  useEffect(()=>navigate(),[navigate])
  return jwt ? children :  navigate("/login");

}

export default PrivateRoute;