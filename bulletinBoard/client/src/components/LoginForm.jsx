import React from "react";
import { useForm } from "react-hook-form";
import { User, Lock } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user/userSlice";
import axios from "axios";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  async function validateUser(data) {
    let username;
    let jwt;
    let res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/auth/local`,
      {
        identifier: data.username,
        password: data.password,
      }
    );
    try {
      username = data.username;
      jwt = res.data.jwt;
    } catch (err) {
      console.log("There was an error: ", err);
    }

    return { username, jwt };
  }

  const onSubmit = (data) => {
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/local`, {
        identifier: data.username,
        password: data.password,
      })
      .then((res) => {
        try {
          const username = data.username;
          const jwt = res.data.jwt;

          axios
            .get(
              `${import.meta.env.VITE_API_BASE_URL}/api/users/me?populate=role`,
              {
                headers: {
                  Authorization: `Bearer ${jwt}`,
                },
              }
            )
            .then((res) => {
              try {
                const role = res.data.role.type;
                dispatch(login(username, role, jwt));
                console.log("Successfully Logged In!");
              } catch (error) {
                console.log("There was an error: ", error);
              }
            });
        } catch (err) {
          console.log("There was an error: ", err);
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex justify-center items-center flex-col"
    >
      <div className="mb-8">
        <label htmlFor="username" className="inline-block translate-y-2">
          <User className="mr-2" />
        </label>
        <input
          {...register("username", { required: true })}
          placeholder="아이디"
          className={`border-b-[1px] ${
            errors.username ? "border-red-300" : "border-gray-300"
          }`}
        />
        {errors.username && (
          <p className="text-xs text-red-300 mt-3">아이디를 입력해주세요</p>
        )}
      </div>

      <div className="mb-20">
        <label htmlFor="password" className="inline-block translate-y-2">
          <Lock className="mr-2" />
        </label>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="비밀번호"
          className={`border-b-[1px] ${
            errors.password ? "border-red-300" : "border-gray-300"
          }`}
        />
        {errors.password && (
          <p className="text-xs text-red-300 mt-3">비밀번호를 입력해주세요</p>
        )}
      </div>
      <input
        type="submit"
        value="로그인"
        className="bg-navy-400 py-4 px-12 rounded-md text-white cursor-pointer font-bold"
      />
    </form>
  );
};

export default LoginForm;
