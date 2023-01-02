import React from "react";
import Logo from "../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex place-content-between mt-6 mx-8">
      <div className="flex gap-4 items-center">
        <Link href="/service" className="text-xs">
          고객 서비스
        </Link>
        <Link href="/news" className="text-xs">
          뉴스레터
        </Link>
        <Link href="/find" className="text-xs">
          매장 찾기
        </Link>
        <FontAwesomeIcon icon={faEllipsis} className="ml-2 cursor-pointer" />
      </div>
      <div className="flex items-center">
        <Link href="/">
          <Logo className="fill-red-500 w-16 mt-5" />
        </Link>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <FontAwesomeIcon icon={faUser} className="text-xl" />
          <span className="text-xs">로그인</span>
        </div>
        <Link
          href="/favorites"
          className="flex items-center gap-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faHeart} className="text-xl" />
          <span className="text-xs">즐겨찾기</span>
        </Link>
        <div className="flex items-center gap-2 cursor-pointer">
          <FontAwesomeIcon icon={faBagShopping} className="text-xl" />
          <span className="text-xs">쇼핑백(0)</span>
        </div>
      </div>
    </div>
  );
};
