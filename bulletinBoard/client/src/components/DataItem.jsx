import React from "react";
import { Trash2 } from "react-feather";
import { axiosInstance } from "../lib/axios";
import { useMutate } from "../hooks/useFetch";
import { useQueryClient } from "react-query";

const usefetchData = () => {};

const DataItem = ({ id, title, updatedAt, author, priority, images, user }) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutate({
    method: "DELETE",
    endpoint: `posts/${id}?populate=*`,
    config: {
      Authorization: `Bearer ${user.jwt}`,
    },
  });

  const deleteImage = (id) => {
    return axiosInstance.delete(`/upload/files/${id}`, {
      headers: {
        Authorization: `Bearer ${user.jwt}`,
      },
    });
  };

  const handleDelete = (e) => {
    deleteMutation.mutate(() => {}, {
      onSuccess: (res) => {
        if (res.data.data.attributes?.images.data) {
          const imagesId = res.data.data.attributes?.images.data.map(
            (image) => image.id
          );
          imagesId.forEach((id) => {
            deleteImage(id)
              .then(() => {
                console.log("Deleted image: ", id);
              })
              .catch((err) => {
                console.log(err);
              });
          });
        }
        queryClient.invalidateQueries("posts/get");
      },
    });
  };

  return (
    <li
      className={`flex items-center py-5 border-b-2 border-gray-300 hover:bg-gray-100 ${
        priority ? "bg-gray-100" : ""
      }`}
    >
      <span className="basis-1/12 w-[10%] text-gray-400 text-center">{id}</span>
      <div className="relative rounded-full w-16 overflow-hidden">
        {images.length > 0 ? (
          <img src={images[0]} className="max-w-full max-h-full object-cover" />
        ) : (
          <span className=""></span>
        )}
      </div>
      <a href={`/posts/${id}`} className="basis-9/12 pl-4">
        <span>{title}</span>
      </a>
      <span className="mr-4 text-navy-400">{author}</span>
      <span className="text-gray-400 text-center pr-4">{updatedAt}</span>
      {user.role === "authenticated" ? (
        <>
          <button type="button" onClick={handleDelete} className="pr-4">
            <Trash2 className="text-red-300" />
          </button>
        </>
      ) : null}
    </li>
  );
};

export default DataItem;
