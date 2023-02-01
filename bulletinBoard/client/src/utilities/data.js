import { format } from "date-fns";

export const extractFields = (data) => {
  const id = data.id;
  const { content, updatedAt: date, title, priority } = data.attributes;
  const { username } = data.attributes.author.data.attributes;
  const images = data.attributes.images.data
    ? data.attributes.images.data.map((item) =>
        item ? `http://localhost:1337${item.attributes.url}` : null
      )
    : [];
  // const imagesSrc = data.attributes.images.data
  //   ? data.attributes.images.data.map(
  //       (item) => `${import.meta.env.VITE_API_BASE_URL}${item.attributes.url}`
  //     )
  //   : [];
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
