import React from "react";
import Link from "next/link";
import Card from "./Card";

const Magazine = () => {
  const data = [
    {
      imageSrc: "/magazine_1.webp",
      title: "글로벌 브랜드 무버 4인의 임파워링",
    },
    {
      imageSrc: "/magazine_1.webp",
      title: "글로벌 브랜드 무버 4인의 임파워링",
    },
    {
      imageSrc: "/magazine_1.webp",
      title: "글로벌 브랜드 무버 4인의 임파워링",
    },
  ];

  return (
    <section className="relative mt-5 text-center py-12 px-4 w-full before:absolute before:z-[-1] before:left-[50%] before:top-0 before:bottom-0 before:w-screen bg-[#f4eddd] before:bg-[#f4eddd] before:translate-x-[-50%]">
      <h1 className="text-4xl tracking-wider font-bold">MAGAZINE</h1>
      <h2 className="text-xs mb-2">A WORLD OF INSPIRATION</h2>
      <Link href="/" className="underline text-sm">
        READ H&M MAGAZINE
      </Link>
      <div className="flex gap-4 mt-12">
        {data.map((item, index) => {
          return (
            <Card key={index} imageSrc={item.imageSrc} title={item.title} />
          );
        })}
      </div>
    </section>
  );
};

export default Magazine;
