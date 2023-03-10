import React, { useState } from "react";
import Info from "../../public/info.svg";
import Modal from "../Common/Modal";

//TODO: Create a modal
const Banner = () => {
  const [show, setShow] = useState(false);
  return (
    <article className="cursor-pointer" onClick={() => setShow(true)}>
      <div className="w-full h-32 mt-6 bg-[#c9002e] relative">
        <div className="text-white w-full h-full flex flex-col justify-center items-center gap-1">
          <h3 className="text-3xl font-medium">Final Sale</h3>
          <h4 className="text-2xl tracking-wider">최대 70% 할인</h4>
          <h6 className="text-xs">세일이 곧 종료됩니다!</h6>
        </div>
        <button className="absolute w-6 h-6 right-0 top-[45%] mr-4">
          <Info className="fill-white" />
        </button>
      </div>
      {show ? <Modal show={show} onClose={() => setShow(false)} /> : null}
    </article>
  );
};

export default Banner;
