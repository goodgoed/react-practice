import { format } from "date-fns";
import { axiosInstance } from "../lib/axios";

export const extractFields = (data) => {
  const id = data?.id;
  const { content, updatedAt: date, title, priority } = data.attributes;
  const username = data.attributes.author.data.attributes?.nickname
    ? data.attributes.author.data.attributes?.nickname
    : data.attributes.author.data.attributes.username;
  const images = data.attributes.images.data
    ? data.attributes.images.data.map((item) =>
        item ? `http://localhost:1337${item.attributes.url}` : null
      )
    : [];
  const updatedAt = format(new Date(date), "yyyy.MM.dd");

  return {
    content,
    updatedAt,
    title,
    id,
    username,
    priority,
    images,
  };
};

export const handleDelete = (deleteMutation, queryClient, callback = null) => {
  deleteMutation.mutate(() => {}, {
    onSuccess: (res) => {
      queryClient.invalidateQueries("posts/get");
      callback();
    },
  });
};
