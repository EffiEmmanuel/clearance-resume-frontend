import React from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Check if user is logged in
  //   const isUserLoggedIn = localStorage.getItem("token");
  const isUserLoggedIn = true;

  if (!isUserLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
