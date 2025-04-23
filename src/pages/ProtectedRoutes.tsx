import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    console.log("PrivateRoute - no accessToken, redirecting to login");
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
