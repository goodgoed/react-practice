import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import Logo from "../../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faEllipsis,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Close from "../../public/close.svg";
import Shoppingbag from "../Common/Shoppingbag";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [exit, setExit] = useState(true);
  const [showBag, setShowBag] = useState(false);

  return (
    <header>
      <nav className="relative flex gap-8 lg:place-content-between mt-6 mx-8">
        <div className="lg:flex gap-4 items-center hidden">
          <Link href="/service" className="text-xs">
            고객 서비스
          </Link>
          <Link href="/news" className="text-xs">
            뉴스레터
          </Link>
          <Link href="/find" className="text-xs">
            매장 찾기
          </Link>
          <FontAwesomeIcon
            icon={faEllipsis}
            className="ml-2 cursor-pointer hover:text-[#e50010]"
          />
        </div>
        <button
          className="lg:hidden block"
          onClick={() => {
            setShowSidebar(true);
            setExit(false);
          }}
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
        <div className="flex items-center">
          <Link href="/">
            <Logo className="fill-red-500 w-10 lg:mt-5 lg:w-16" />
          </Link>
        </div>
        <div className="relative flex items-center gap-4 ml-auto lg:ml-0">
          <div className="flex items-center gap-2 cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
            <span className="text-xs hidden lg:block">로그인</span>
          </div>
          <button className="flex items-center lg:hidden">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <Link
            href="/favorites"
            className="flex items-center gap-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
            <span className="text-xs hidden lg:block">즐겨찾기</span>
          </Link>
          <div
            className="flex items-center gap-2 cursor-pointer h-[30px]"
            onMouseOver={() => setShowBag(true)}
            onMouseLeave={() => {
              setShowBag(false);
            }}
          >
            <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
            <span className="text-xs hidden lg:block">쇼핑백(0)</span>

            {showBag ? <Shoppingbag setShowBag={setShowBag} /> : ""}
          </div>
        </div>
        {showSidebar && (
          <div className="fixed z-[1000] left-0 right-0 top-0 bottom-0 bg-[#00000080] flex">
            <div
              className={`w-2/5 h-screen bg-white ${
                !exit
                  ? "animate-appear-sidebar"
                  : "transition-all translate-x-[-400px]"
              }`}
            ></div>
            <div
              className={`w-3/5 h-screen relative`}
              onClick={(e) => {
                setExit(true);
                setTimeout(() => {
                  setShowSidebar(false);
                }, 250);
                e.stopPropagation();
              }}
            >
              <Close className="absolute left-0 top-[50%] w-6 fill-white ml-3" />
            </div>
          </div>
        )}
      </nav>
      <div className="relative mt-8 lg:flex justify-center items-center place-content-between hidden">
        <div className="invisible grow-0 shrink-0 basis-2/12">HIDDEN</div>
        <div className="basis-8/12">
          <Sidebar />
        </div>
        <div className="basis-2/12">
          <Searchbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
