import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { User, Lock } from "react-feather";

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

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
