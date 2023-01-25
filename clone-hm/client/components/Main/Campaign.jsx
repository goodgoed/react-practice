import React from "react";
import Image from "next/image";
import Link from "next/link";

const Campaign = ({ imageSrc, children }) => {
  return (
    <div className="relative w-full pt-[100%] lg:pt-[66.66%] mt-5 ">
      <Image
        src={imageSrc}
        alt="campaign picture"
        sizes="(max-width: 1024px) 70vw, 600px"
        fill
      />
      {children}
    </div>
  );
};

export default Campaign;
