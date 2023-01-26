import LoginForm from "../components/LoginForm";
import { ReactComponent as Illustration } from "../assets/illust.svg";
import { Navigate } from "react-router-dom";
import { isUser } from "../features/user/auth";

function LoginPage() {
  const isUser_LoggedIn = isUser();

  if (isUser_LoggedIn) return <Navigate to="/posts" replace />;

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <div className="relative w-1/2 h-1/2 rounded-md shadow-md flex">
        <div className="relative w-1/2 h-full">
          <LoginForm />
        </div>
        <Illustration className="relative w-1/2 h-full py-2 px-2" />
      </div>
    </div>
  );
}

export default LoginPage;
