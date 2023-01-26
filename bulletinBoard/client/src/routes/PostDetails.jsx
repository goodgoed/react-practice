import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { extractFields } from "../utilities/data";

const Post = () => {
  const id = useParams().postId;
  const navigate = useNavigate();
  const { data, error, loading } = useFetch(
    `/posts?filters[id][$eq]=${id}&populate=*`
  );
  if (error) return <div>Something went wrong!</div>;
  if (JSON.stringify(data) === "{}") return <div>NOTHING</div>;
  if (loading) return <div>Loading</div>;

  const { title, updatedAt, content } = extractFields(data.data[0]);

  return (
    <div className="w-full border-t-[3px] border-navy-400">
      <div className="w-full border-b-[1px] border-gray-300 flex py-6 px-4">
        <h2>{title}</h2>
        <span className="ml-auto text-gray-400">{updatedAt}</span>
      </div>
      <div className="w-full border-b-[1px] border-gray-300 py-6 px-4">
        {content}
      </div>
      <div className="flex justify-center items-center mt-12">
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

export default Post;
