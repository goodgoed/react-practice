import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ imageSrc, title }) => {
  return (
    <article className="w-full">
      <div className="relative w-full h-[200px]">
        <Image src={imageSrc} alt={imageSrc} fill />
      </div>
      <div className="bg-white flex flex-1 flex-col place-content-between p-[16px]">
        <p className="text-xs">INSIDE H&M</p>
        <h2>{title}</h2>
        <Link
          href="/"
          className="mt-[64px] text-xs flex justify-center items-center gap-2"
        >
          Read The Story{" "}
          <FontAwesomeIcon icon={faArrowRight} className="border-none" />
        </Link>
      </div>
    </article>
  );
};

export default Card;
