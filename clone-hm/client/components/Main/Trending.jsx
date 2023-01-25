import React, { useState } from "react";

import Carousel from "../Common/Carousel";
import useFetch from "../../hooks/useFetch";

//TODO: 1. Componentize single item 2. Create a carousel
const Trending = () => {
  // const items = [
  //   {
  //     type: "여성",
  //     category: "가디건 & 풀오버",
  //     image: "trending_1.png",
  //   },
  //   {
  //     type: "여성",
  //     category: "가디건 & 풀오버",
  //     image: "trending_2.png",
  //   },
  //   {
  //     type: "여성",
  //     category: "가디건 & 풀오버",
  //     image: "trending_3.png",
  //   },
  //   {
  //     type: "여성",
  //     category: "가디건 & 풀오버",
  //     image: "trending_4.png",
  //   },
  //   {
  //     type: "여성",
  //     category: "가디건 & 풀오버",
  //     image: "trending_5.png",
  //   },
  //   {
  //     type: "여성",
  //     category: "가디건 & 풀오버",
  //     image: "trending_6.png",
  //   },
  //   {
  //     type: "남성",
  //     category: "가디건 & 풀오버",
  //     image: "trending_7.png",
  //   },
  // ];

  const { data, loading } = useFetch(
    "/products?filters[trending][$eq]=TRUE&populate=*"
  );

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className="relative flex flex-col justify-start mt-8">
          <span className="text-xl mb-4">트렌드 카테고리</span>
          <Carousel items={data} />
        </div>
      )}
    </>
  );
};

export default Trending;
