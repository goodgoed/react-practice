import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ onClose, show }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const items = [
    "지금 멤버십에 가입하세요",
    "여성",
    "남성",
    "Divided",
    "유아복",
    "아동",
    "H&M HOME",
  ];

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  if (isBrowser) {
    const target = document.getElementById("modal-root");
    const modal = (
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000080] flex justify-center items-center"
        onClick={handleClick}
      >
        <div className={`bg-[#faf9f8] animate-appear`}>
          <div className="py-6 px-12 w-[530px]">
            <div className="relative text-center mb-6">
              <h1 className="text-xl">설맞이 한정 특가 쇼핑 혜택</h1>
              <button
                className="absolute right-0 top-0 text-2xl"
                onClick={onClose}
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
            <p className="text-xs mb-4">
              1.16(월) - 1.24(화) 23:59까지 | 매장 & hm.com | 타 혜택과 중복
              적용 불가
            </p>
            <ul className="bg-white">
              {items.map((item, index) => {
                return (
                  <li key={index} className="flex px-4 py-4 text-xs">
                    {item}
                    <button className="ml-auto">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );

    return ReactDOM.createPortal(modal, target);
  }
};

export default Modal;
