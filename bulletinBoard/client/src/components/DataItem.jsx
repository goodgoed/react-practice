import React, { useState, useCallback } from "react";
import { changed } from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "react-feather";
import axios from "axios";

const DataItem = ({ id, title, updatedAt, author, priority }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleDelete = (e) => {
    axios
      .delete(`${import.meta.env.VITE_API_BASE_URL}/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      })
      .then((res) => {
        dispatch(changed("changed"));
        console.log("Successfully Deleted the post: ", title);
      })
      .catch((err) => {
        console.log("Something went wrong: ", err.message);
      });
  };

  return (
    <li
      className={`flex py-5 border-b-2 border-gray-300 hover:bg-gray-100 ${
        priority ? "bg-gray-100" : ""
      }`}
    >
      <span className="basis-1/12 w-[10%] text-gray-400 text-center">{id}</span>
      <a href={`/posts/${id}`} className="basis-9/12 pl-4">
        <span>{title}</span>
      </a>
      <span className="mr-4 text-navy-400">{author}</span>
      <span className="text-gray-400 text-center pr-4">{updatedAt}</span>
      {user.role === "authenticated" ? (
        <button type="button" onClick={handleDelete} className="pr-4">
          <Trash2 className="text-red-300" />
        </button>
      ) : null}
    </li>
  );
};

export default DataItem;
