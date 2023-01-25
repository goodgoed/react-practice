import React from "react";

const Skeleton = () => {
  return (
    <div className="relative w-full mt-12 mb-8">
      <h3 className="w-full pt-[30%] bg-gray-100 rounded-md relative overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-gradient-to-r after:from-transparent after:via-[rgba(255,255,255,.5)] after:to-transparent after:animate-skeleton"></h3>
      {Array.from({ length: 3 }, (_, index) => {
        return (
          <div className="flex mt-2" key={index}>
            <h4 className="bg-gray-100 w-1/3 h-5 rounded-md relative overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-gradient-to-r after:from-transparent after:via-[rgba(255,255,255,.5)] after:to-transparent after:animate-skeleton"></h4>
            <span className="bg-gray-100 w-1/3 h-5 rounded-md ml-auto relative overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-gradient-to-r after:from-transparent after:via-[rgba(255,255,255,.5)] after:to-transparent after:animate-skeleton"></span>
          </div>
        );
      })}
      <hr className="my-4 border-1" />
      <div className="flex mt-2">
        <h4 className="bg-gray-100 w-1/3 h-5 rounded-md relative overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-gradient-to-r after:from-transparent after:via-[rgba(255,255,255,.5)] after:to-transparent after:animate-skeleton"></h4>
        <span className="bg-gray-100 w-1/3 h-5 rounded-md ml-auto relative overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-gradient-to-r after:from-transparent after:via-[rgba(255,255,255,.5)] after:to-transparent after:animate-skeleton"></span>
      </div>
      {Array.from({ length: 2 }, (_, index) => {
        return (
          <div
            className="w-full h-8 mt-2 bg-gray-100 rounded-md relative overflow-hidden after:absolute after:inset-0 after:translate-x-[-100%] after:bg-gradient-to-r after:from-transparent after:via-[rgba(255,255,255,.5)] after:to-transparent after:animate-skeleton"
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default Skeleton;
