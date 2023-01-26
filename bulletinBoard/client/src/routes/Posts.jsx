import React, { useState } from "react";
import DataTableView from "../components/DataTableView";
import useFetch from "../hooks/useFetch";
import Pagelist from "../components/Pagelist";
import { changed } from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Mainpage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, loading, totalPage } = useFetch(
    `/posts?sort[0]=priority:desc&pagination[page]=${currentPage}&pagination[pageSize]=10&populate=*`
  );

  if (error) {
    console.log(error);
    return <div>Something is wrong</div>;
  }

  const handleAdd = () => {};

  return (
    <>
      <h1 className="text-4xl mb-8">게시판</h1>
      <div className="flex items-center mx-4">
        <form action="" className="flex my-6 gap-4">
          <input
            type="text"
            className="basis-3/12 py-2 px-5 border-[1px] border-gray-300 rounded-md"
            placeholder="검색어를 입력해 주세요"
          />
          <input
            type="submit"
            value="조회"
            className="py-2 px-6 rounded-md bg-gray-500 text-white cursor-pointer"
          />
        </form>
        {user.role === "authenticated" && (
          <button
            className="bg-navy-400 py-2 px-6 rounded-md ml-auto text-white"
            onClick={handleAdd}
          >
            추가
          </button>
        )}
      </div>
      <div className="w-full flex justify-center items-center mb-8">
        {loading ? "loading" : <DataTableView data={data} />}
      </div>
      <div className="w-full flex justify-center items-center">
        <Pagelist
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      </div>
    </>
  );
};

export default Mainpage;
