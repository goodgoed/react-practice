import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isUser } from "../features/user/auth";

const AlreadyLoggedIn = () => {
  const isUser_LoggedIn = isUser();
  if (isUser_LoggedIn) return <Navigate to="/posts" replace />;

  return (
    <div className="relative w-screen h-screen">
      <Outlet />
    </div>
  );
};

export default AlreadyLoggedIn;
