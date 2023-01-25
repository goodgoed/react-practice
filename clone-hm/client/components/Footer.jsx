import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareTwitter,
  faSquareInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const lists = ["category", "info", "service"];
  const items = {
    category: [
      "카테고리",
      "여성",
      "남성",
      "신생아/유아",
      "아동",
      "H&M HOME",
      "스포츠",
      "Sale",
    ],
    info: [
      "기업 정보",
      "H&M 채용정보",
      "H&M 회사 소개",
      "지속가능성",
      "언론",
      "IR 정보",
      "Corporate governance",
    ],
    service: [
      "고객 지원",
      "고객 서비스",
      "내 계정",
      "매장 찾기",
      "*개인정보 처리방침",
      "문의하기",
      "기프트 카드",
      "사기 신고",
      "쿠키 설정",
    ],
  };
  const [show, setShow] = useState(false);

  return (
    <footer className="w-screen bg-[#e4e4e4] py-16 px-24 ">
      <div className="text-sm flex place-content-between">
        {lists.map((list, index) => {
          return (
            <ul key={index}>
              {items[list].map((item, index) => {
                return (
                  <li key={index} className={index === 0 ? "mb-4" : "mb-2"}>
                    {item}
                  </li>
                );
              })}
            </ul>
          );
        })}
        <ul>
          <li className="mb-5">지금 멤버십에 가입하세요!</li>
          <li className="mb-10">지금 가입하시고 10% 할인받으세요</li>
          <li>
            지금 가입하기{" "}
            <FontAwesomeIcon icon={faArrowRight} className="border-none" />
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center items-center mt-8 gap-12">
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faSquareTwitter} />
        <FontAwesomeIcon icon={faSquareInstagram} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterest} />
      </div>
      <div className="text-center text-sm mt-5 px-36">
        <p>
          이 사이트의 콘텐츠는 저작권 보호를 받고 있는 H & M Hennes & Mauritz
          AB의 자산입니다. H&M의 경영 이념은 패션과 품질을 지속 가능한 방법으로
          가장 합리적인 가격에 제공하는 것입니다. H&M은 최초 설립된 1947년
          이후부터 세계 패션 업계를 선도하는 탁월한 기업의 하나로
          성장하였습니다.
        </p>
        <p className={`${show ? "inline-block" : "hidden"}`}>
          더 보기 | 법인명 에이치앤엠헤네스 앤 모리츠 주식회사 |
          통신판매업신고번호 : 2022-서울강남-01184 / 사업자등록| 번호:
          220-87-83339 | 대표자: 아담 칼슨, 아네타 포쿠친스카 서울특별시 강남구
          영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 080-822-0220
          info.kr@hm.com 사업자 정보 확인 지급보증안내
        </p>
        <button
          className="hover:underline"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "간단히 읽어보기" : "더보기"}
        </button>
        <p>
          법인명 에이치앤엠헤네스앤모리츠 주식회사 | 통신판매업신고번호 :
          2022-서울강남-01184 / 사업자등록번호: 220-87-83339 | 대표자 :
          아담칼슨,아네타포쿠친스카 서울특별시 강남구 영동대로 421, 9층 삼탄빌딩
          (대치동) 06182 | 대표번호 080-822-0220 | info.kr@hm.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
