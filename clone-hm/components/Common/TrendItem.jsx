import React from "react";
import Link from "next/link";
import Image from "next/image";

const TrendItem = ({ imageSrc, type, category, width }) => {
  return (
    <div className="relative float-left" style={{ width: width }}>
      <Link href="/" className="relative w-full flex flex-col px-3 ">
        <div className="relative w-full pt-[100%]">
          <Image
            src={`/${imageSrc}`}
            alt={imageSrc}
            fill
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-sm">{type}</h2>
          <p className="text-sm">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default TrendItem;
