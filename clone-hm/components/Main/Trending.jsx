import React from "react";
import Image from "next/image";
import Link from "next/link";

//TODO: Create a carousel
const Trending = () => {
  const items = [
    {
      type: "여성",
      category: "가디건 & 풀오버",
      image: "trending_1.png",
    },
    {
      type: "여성",
      category: "가디건 & 풀오버",
      image: "trending_2.png",
    },
    {
      type: "여성",
      category: "가디건 & 풀오버",
      image: "trending_3.png",
    },
    {
      type: "여성",
      category: "가디건 & 풀오버",
      image: "trending_4.png",
    },
    {
      type: "여성",
      category: "가디건 & 풀오버",
      image: "trending_5.png",
    },
    {
      type: "여성",
      category: "가디건 & 풀오버",
      image: "trending_6.png",
    },
    {
      type: "여성",
      category: "가디건 & 풀오버",
      image: "trending_7.png",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-start mt-8">
      <span className="text-xl mb-4">트렌드 카테고리</span>
      <div className="w-full flex overflow-hidden gap-4">
        {items.map((item, index) => {
          return (
            <Link href="/" key={index}>
              <div>
                <Image
                  src={`/${item.image}`}
                  alt={item.image}
                  width={200}
                  height={200}
                  className="mb-4"
                />
                <div className="flex flex-col items-center">
                  <h2 className="text-sm">{item.type}</h2>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
