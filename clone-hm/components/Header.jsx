import React from "react";
import { Navbar } from "./Navbar";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="relative flex mt-8 justify-between items-end">
        <div className="invisible"></div>
        <Sidebar />
        <Searchbar />
      </div>
    </header>
  );
};

export default Header;
