import Trending from "../components/Main/Trending";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Arrow from "../public/arrow.svg";

import Banner from "../components/Main/Banner";
import New from "../components/Main/New";
import Campaign from "../components/Main/Campaign";
import Magazine from "../components/Main/Magazine";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-10">
        <Link href={"/"} className="text-sm hover:underline">
          회원 혜택: 3만원 이상 무료배송 & 첫 구매 10% 할인
        </Link>
      </div>
      <Trending />
      <Campaign imageSrc="/campaign_1.jpg" buttonColor="#fff">
        <div
          className="absolute inset-0 "
          style={{ width: "inherit", height: "inherit" }}
        >
          <div className="relative top-[70%] flex flex-col items-center justify-end pb-10 gap-3">
            <h3 className="text-4xl tracking-widest">여유롭고 우아한 디테일</h3>
            <h5 className="text-sm">미니멀리즘 룩의 새롭고 흥미로운 시도</h5>
            <button className={`py-2 px-2 text-sm bg-black text-white`}>
              <Link href="/">지금 쇼핑하기</Link>
            </button>
          </div>
        </div>
        <button>
          <div className="absolute z-10 right-0 top-1/2 flex flex-col items-start text-white bg-black py-3 px-3 rounded mr-2">
            <span>₩ 39,900</span>
            <span className="">
              오버사이즈 포인텔 니트...
              <FontAwesomeIcon icon={faChevronRight} className="ml-3 text-sm" />
            </span>
          </div>
          <span className="absolute w-5 h-5 right-[13.4rem] top-[54%]">
            <Arrow />
          </span>
        </button>
      </Campaign>
      <Banner />
      <New />
      <Campaign imageSrc="/campaign_2.webp">
        <div className="absolute w-full text-center text-white top-[30%]">
          <h3 className="text-[2rem]">Best Seller</h3>
          <h4 className="text-[4rem] font-medium tracking-wider leading-[4.4rem]">
            침실·욕실·주방 가득 채운 <br /> 추천 HOME 베스트셀러
          </h4>
          <p className="text-[1.5rem]">
            일상을 함께하는 스타일리시한 베스트셀러 아이템을 모두 만나보세요!
          </p>
        </div>
        <button
          className={`absolute bottom-10 left-[45%] py-2 px-2 text-sm bg-black text-white`}
        >
          <Link href="/">지금 쇼핑하기</Link>
        </button>
      </Campaign>
      <Magazine />
    </>
  );
}
