import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useAuth(); // ✅ FIXED

  // ⏳ Wait until auth is restored
  if (authLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  // 🔐 Redirect only AFTER loading
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
