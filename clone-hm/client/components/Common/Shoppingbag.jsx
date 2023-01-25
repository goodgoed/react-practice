import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Skeleton from "./Skeleton";

const Shoppingbag = ({ setShowBag }) => {
  const items = useSelector((state) => state.shopping);
  let totalPrice = 0;
  const [loading, setLoading] = useState(true);

  const noItem = (
    <>
      <h4 className="text-sm border-grey-400 border-b-[1px] py-6">
        귀하의 쇼핑백이 비어 있습니다.
      </h4>
      <div className="flex py-5 border-grey-400 border-b-[1px] items-center">
        <h5 className="text-xs">주문가격</h5>
        <span className="ml-auto">₩ 0</span>
      </div>
      <div className="flex py-2 items-center">
        <h5 className="text-xl">합계</h5>
        <span className="ml-auto">₩ 0</span>
      </div>
    </>
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div
      className="absolute bg-white top-[65%] -left-[50%] w-[360px] z-[1000] cursor-default"
      onMouseOver={() => setShowBag(true)}
    >
      <div className="relative py-2 px-6">
        {loading ? (
          <Skeleton />
        ) : items.length === 0 ? (
          noItem
        ) : (
          items.map((item) => {
            return (
              <div key={item.id}>
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  width={100}
                  height={300}
                />
                <div>
                  <h1>{item.name}</h1>
                  <h2>₩{item.price}</h2>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Shoppingbag;
