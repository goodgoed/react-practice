import React, { useState, useEffect } from "react";
import PostDetails from "../components/PostDetails";
import { extractFields } from "../utilities/data";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutate } from "../hooks/useFetch";
import { useQueryClient } from "react-query";
import { handleDelete } from "../utilities/data";

const PostDetailsContainer = ({ id }) => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const queryClient = useQueryClient();

  const deleteMutation = useMutate({
    method: "DELETE",
    endpoint: `posts/${id}?populate=*`,
    config: {
      Authorization: `Bearer ${user.jwt}`,
    },
  });

  const { data, error, isLoading } = useFetch({
    id: ["postDetail/get"],
    endpoint: `/posts?filters[id][$eq]=${id}&populate=*`,
    config: {
      Authorization: `Bearer ${user.jwt}`,
    },
  });

  const onDelete = () => {
    handleDelete(deleteMutation, queryClient, () => {
      navigate("/posts");
    });
  };

  const [images, setImages] = useState([]);
  useEffect(() => {
    if (data) {
      const fetchImages = async () => {
        const imageInfos = data.data[0].attributes?.images.data
          ? data.data[0].attributes?.images.data.map((item) => {
              return {
                mime: item.attributes.mime,
                name: item.attributes.name,
                url: item.attributes.url,
                id: item.id,
              };
            })
          : [];
        const imageFiles = await Promise.all(
          imageInfos.map(async (item, index) => {
            const res = await fetch(import.meta.env.VITE_BASE_URL + item.url);
            const blob = await res.blob();
            const file = {
              image: URL.createObjectURL(
                new File([blob], item.name, { type: item.mime })
              ),
              name: item.name,
              id: item.id,
            };
            return file;
          })
        );
        setImages(imageFiles);
      };
      fetchImages();
    }
  }, [data]);

  if (error) return <div>Something went wrong!</div>;
  if (JSON.stringify(data) === "{}") return <div>NOTHING</div>;
  if (isLoading) return <div>Loading</div>;

  const { title, updatedAt, content, priority } = extractFields(data.data[0]);

  return (
    <PostDetails
      id={id}
      priority={priority}
      updatedAt={updatedAt}
      content={content}
      title={title}
      images={images}
      user={user}
      onDelete={onDelete}
    />
  );
};

export default PostDetailsContainer;
