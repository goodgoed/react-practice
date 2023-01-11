import Trending from "../components/Trending";

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-10">
        <p className="text-sm">
          회원 혜택: 3만원 이상 무료배송 & 첫 구매 10% 할인
        </p>{" "}
      </div>
      <Trending />
    </>
  );
}
