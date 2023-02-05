import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="fixed top-0 left-0 right-0  bg-white z-10 shadow-md">
      <div className="flex py-4 px-8">
        <div className="ml-auto">
          <button type="button" className="text-md" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
