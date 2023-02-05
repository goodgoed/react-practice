import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isUser } from "../features/user/auth";
import Navbar from "./Navbar";

const RequiredAuth = () => {
  const isUser_LoggedIn = isUser();
  if (!isUser_LoggedIn) return <Navigate to="/login" from={{}} replace />;

  return (
    <div className="relative w-screen h-screen">
      <Navbar />
      <main className="relative w-4/6 h-[90%] mx-auto my-28">
        <Outlet />
      </main>
    </div>
  );
};

export default RequiredAuth;
