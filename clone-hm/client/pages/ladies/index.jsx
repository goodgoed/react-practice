import React, { useEffect, useState } from "react";
import Product from "../../components/Common/Product";
import useFetch from "../../hooks/useFetch";
import { getImageUrl } from "../../utilities/utilities";

const Sidebar = () => {
  const headers = [
    "기획 상품",
    "신상품",
    "현재 트렌드",
    "Best Seller",
    "상품별 구매",
  ];
  const subItems = {
    "기획 상품": ["설맞이 한정 특가 + 인기상품 추가"],
    신상품: ["모두 보기", "의류", "신발 & 액세서리", "언더웨어 & 나이트웨어"],
    "현재 트렌드": ["여성베이직 웨어"],
    "Best Seller": ["위클리 베스트 셀러 updated"],
    "상품별 구매": ["모두 보기", "아우터", "블레이저", "가디건 & 풀오버"],
  };

  return (
    <>
      {headers.map((header, index) => {
        return (
          <ul key={index} className="mb-4">
            <h3 className="font-bold text-md mb-2">{header}</h3>
            {subItems[header].map((item, index) => {
              return (
                <li key={index} className="text-sm mb-2">
                  {item}
                </li>
              );
            })}
          </ul>
        );
      })}
    </>
  );
};

const Index = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(
    "/products?pagination[limit]=6&pagination[start]=0&populate=*"
  );
  const { data: items, loading, meta } = useFetch(url);
  const totalItem = meta?.pagination?.total;

  useEffect(() => {
    setData((prev) => prev.concat(items));
  }, [JSON.stringify(items)]);

  const handleClick = () => {
    setUrl(
      `/products?pagination[limit]=6&pagination[start]=${data.length}&populate=*`
    );
  };

  return (
    <section className="flex mt-8">
      <aside className="w-1/4">
        <Sidebar />
      </aside>
      <div className="relative w-3/4">
        <h1 className="text-4xl mb-3">모두 보기</h1>
        <p className="text-xs">
          새로운 필터 기능을 사용해서 당신에게 딱 맞는 사이즈를 찾아보세요!
          영캐주얼부터 뷰티제품까지 다양하게 준비되어 있으니 지금 둘러보세요
        </p>
        <ul className="mt-8">
          {loading
            ? "loading"
            : data.map((item) => {
                return (
                  <li
                    key={item.attributes.id}
                    className="relative w-[calc(100%_/_3_-_4px)] inline-block mb-1 ml-1 [&:nth-child(3n+1)]:ml-0"
                  >
                    <Product
                      imageSrc={getImageUrl(
                        item.attributes.image.data.attributes.url
                      )}
                      name={item.attributes.name}
                      price={item.attributes.price}
                    />
                  </li>
                );
              })}
        </ul>
        <div className="flex flex-col justify-center items-center mt-8">
          <h2 className="text-sm">
            표시 {data.length}/{totalItem} 아이템
          </h2>
          {data.length === totalItem ? null : (
            <button
              type="button"
              onClick={handleClick}
              className="bg-black text-white py-4 px-24 "
            >
              더 많은 제품 보기
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Index;
