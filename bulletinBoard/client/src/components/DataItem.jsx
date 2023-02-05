import React from "react";
import { Trash2 } from "react-feather";
import { useMutate } from "../hooks/useFetch";
import { useQueryClient } from "react-query";
import { handleDelete } from "../utilities/data";
import isUser from "../utilities/user";

const DataItem = ({ id, title, updatedAt, author, priority, images, user }) => {
  const queryClient = useQueryClient();
  const userStatus = isUser(user);

  const deleteMutation = useMutate({
    method: "DELETE",
    endpoint: `posts/${id}?populate=*`,
    config: {
      Authorization: `Bearer ${user.jwt}`,
    },
  });

  return (
    <li
      className={`flex items-center py-5 border-b-2 border-gray-300 hover:bg-gray-100 ${
        priority ? "bg-gray-100" : ""
      }`}
    >
      <span className="basis-1/12 w-[10%] text-gray-400 text-center">{id}</span>
      {userStatus && <input type="checkbox" className="mr-4" name={id} />}
      <div className="relative rounded-full w-16 overflow-hidden">
        {images.length > 0 ? (
          <img src={images[0]} className="max-w-full max-h-full object-cover" />
        ) : (
          <span className=""></span>
        )}
      </div>
      <a href={`/posts/${id}`} className="pl-4">
        <span>{title}</span>
      </a>
      <div className="ml-auto flex items-center">
        <span className="mr-4 text-navy-400">{author}</span>
        <span className="text-gray-400 text-center pr-4">{updatedAt}</span>
        {userStatus ? (
          <>
            <button
              type="button"
              onClick={() => {
                handleDelete(deleteMutation, queryClient);
              }}
              className="pr-4"
            >
              <Trash2 className="text-red-300" />
            </button>
          </>
        ) : null}
      </div>
    </li>
  );
};

export default DataItem;
