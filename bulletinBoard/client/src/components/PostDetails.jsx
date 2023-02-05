import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import isUser from "../utilities/user";
import PostModal from "./PostModal";

const PostDetails = ({
  id,
  title,
  content,
  priority,
  updatedAt,
  images,
  user,
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userStatus = isUser(user);
  const navigate = useNavigate();

  const handleOpen = (e) => {
    setIsModalOpen(true);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className="w-full border-t-[3px] border-navy-400">
      <div className="w-full border-b-[1px] border-gray-300 flex py-6 px-4">
        <h2>{title}</h2>
        <span className="ml-auto text-gray-400">{updatedAt}</span>
      </div>
      <div className="w-full border-b-[1px] border-gray-300 py-6 px-4 mb-12">
        <div className="mb-4 flex items-center gap-4">
          <span className="font-bold">사진: </span>
          {images.map((item, index) => (
            <button
              key={index}
              className="text-white px-4 py-2 bg-green-400 rounded-full"
            >
              <a href={item.image} download target="_blank">
                {item.name}
              </a>
            </button>
          ))}
        </div>
        {content}
      </div>
      {userStatus ? (
        <div className="w-full flex justify-end items-center gap-4 mb-4">
          <Button desc="수정" onClick={handleOpen} />
          <Button desc="삭제" className="bg-red-400" onClick={onDelete} />
        </div>
      ) : null}
      {isModalOpen && (
        <PostModal
          onRequestClose={handleClose}
          isOpen={isModalOpen}
          id={id}
          defaultValue={{
            title,
            content,
            priority,
            images,
          }}
        />
      )}
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            navigate(-1);
          }}
          className="rounded-md py-3 px-24 border-[1px] border-gray-300"
        >
          목록
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
