import React, { useState, useRef, useEffect } from "react";
import Pagination from "./Pagination";
import PostModal from "./PostModal";
import DataItem from "./DataItem";
import { extractFields } from "../utilities/data";
import isUser from "../utilities/user";
import Button from "./Button";

const Posts = ({
  data,
  totalPage,
  handleDelete,
  setCurrentPage,
  currentPage,
  user,
  deleteArr,
  style,
  searchQuery,
  setSearchQuery,
}) => {
  const userStatus = isUser(user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchRef = useRef(null);

  const handleClick = (e) => {
    setIsModalOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      deleteArr.push(e.target.name);
    } else {
      deleteArr = deleteArr.filter((item) => {
        return item !== e.target.name;
      });
    }
    console.log(deleteArr);
  };

  const handleSearch = (e) => {
    setSearchQuery(searchRef.current.value);
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div style={style}>
      <h1 className="text-4xl mb-8">
        <a href="/posts">게시판</a>
      </h1>
      <div className="flex items-center mx-4">
        <div
          className="flex my-6 gap-4"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        >
          <input
            type="text"
            className="basis-3/12 py-2 px-5 border-[1px] border-gray-300 rounded-md"
            placeholder="검색어를 입력해 주세요"
            ref={searchRef}
            defaultValue={searchQuery}
          />
          <Button
            desc="조회"
            className={`px-6 bg-gray-500`}
            onClick={handleSearch}
          />
        </div>
        {userStatus && (
          <div className="ml-auto flex gap-4">
            <Button desc="추가" onClick={handleClick} className="px-6" />
            {isModalOpen && (
              <PostModal isOpen={isModalOpen} onRequestClose={handleClose} />
            )}
            <Button
              desc="선택 삭제"
              onClick={handleDelete}
              className="px-6 bg-red-400"
            />
          </div>
        )}
      </div>
      <div className="w-full flex justify-center items-center mb-8">
        {data.length === 0 ? (
          "NOTHING"
        ) : (
          <ul
            className="w-full border-t-[3px] border-navy-400"
            onClick={(e) => handleCheckbox(e)}
          >
            {data.data.map((item) => {
              const { updatedAt, title, id, username, priority, images } =
                extractFields(item);

              return (
                <DataItem
                  user={user}
                  key={id}
                  id={id}
                  title={title}
                  updatedAt={updatedAt}
                  author={username}
                  priority={priority}
                  images={images}
                />
              );
            })}
          </ul>
        )}
      </div>
      <div className="w-full flex justify-center items-center">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
      </div>
    </div>
  );
};

export default Posts;
