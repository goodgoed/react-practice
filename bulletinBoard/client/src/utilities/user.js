import { useSelector } from "react-redux";

const isUser = (user) => {
  return user.role === "authenticated" ? true : false;
};

export default isUser;
