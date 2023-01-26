import { format } from "date-fns";

export const extractFields = (data) => {
  const id = data.id;
  const { content, updatedAt: date, title, priority } = data.attributes;
  const { firstname } = data.attributes.author.data.attributes;
  const updatedAt = format(new Date(date), "yyyy.MM.dd");

  return { content, updatedAt, title, id, firstname, priority };
};
