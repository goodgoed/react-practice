import { useState } from "react";
import LoginForm from "../components/LoginForm";
import { ReactComponent as Illustration } from "../assets/illust.svg";
import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";
import { axiosInstance } from "../lib/axios";
import { useQuery, useMutation } from "react-query";

function LoginFormContainer() {
  const dispatch = useDispatch();

  const { mutate } = useMutation((loginInfo, config) => {
    return axiosInstance.post(
      "/auth/local",
      { ...loginInfo },
      {
        headers: { ...config },
      }
    );
  });
  // const { data } = useQuery(
  //   ["login", jwt],
  //   async () => {

  //   },
  //   {
  //     enabled: !!jwt,
  //   }
  // );

  const onSubmit = (formData) => {
    mutate(
      {
        identifier: formData.username,
        password: formData.password,
      },
      {
        onSuccess: async (data) => {
          const jwt = data.data.jwt;
          const res = await axiosInstance.get("/users/me?populate=role", {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
          dispatch(
            login(formData.username, res.data.id, res.data.role.type, jwt)
          );
        },
      }
    );
  };

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      <div className="relative w-1/2 h-1/2 rounded-md shadow-md flex">
        <div className="relative w-1/2 h-full">
          <LoginForm onSubmit={onSubmit} />
        </div>
        <Illustration className="relative w-1/2 h-full py-2 px-2" />
      </div>
    </div>
  );
}

export default LoginFormContainer;
