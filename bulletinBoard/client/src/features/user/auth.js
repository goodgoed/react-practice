import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

export const isUser = () => {
  const user = useSelector((state) => state.user);
  if (!user.jwt) return false;

  const token = jwt_decode(user.jwt, { body: true });
  if (token) {
    const exp = token.exp;
    if (exp > new Date().getTime() / 1000) return true;

    return false;
  }
};
