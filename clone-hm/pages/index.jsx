import Trending from "../components/Main/Trending";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Arrow from "../public/arrow.svg";
import Info from "../public/info.svg";
import New from "../components/Main/New";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-10">
        <p className="text-sm">
          회원 혜택: 3만원 이상 무료배송 & 첫 구매 10% 할인
        </p>{" "}
      </div>
      <Trending />
      <div className="relative w-full h-[672px] mt-5">
        <Image
          src="/campaign_1.jpg"
          alt="campaign 1"
          sizes="(max-width: 1024px) 70vw, 600px"
          fill
        />
        <div
          className="relative z-10 flex flex-col items-center justify-end pb-10 gap-3"
          style={{ width: "inherit", height: "inherit" }}
        >
          <h3 className="text-4xl tracking-widest">여유롭고 우아한 디테일</h3>
          <h5 className="text-sm">미니멀리즘 룩의 새롭고 흥미로운 시도</h5>
          <button className="bg-white p-3 text-sm">
            <Link href="/">지금 쇼핑하기</Link>
          </button>
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
      </div>
      <article className="cursor-pointer">
        <div className="w-full h-32 mt-6 bg-[#c9002e] relative">
          <div className="text-white w-full h-full flex flex-col justify-center items-center gap-1">
            <h3 className="text-3xl font-medium">Final Sale</h3>
            <h4 className="text-2xl tracking-wider">최대 70% 할인</h4>
            <h6 className="text-xs">세일이 곧 종료됩니다!</h6>
          </div>
          <button className="absolute w-6 h-6 right-0 top-[45%] mr-4">
            <Info className="fill-white" />
          </button>
        </div>
      </article>
      <New />
    </>
  );
}