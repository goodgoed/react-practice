import React from "react";
import useInput from "./utilities/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

export const Form = () => {
  const [username, usernameInput] = useInput({
    type: "text",
    name: "Username",
    placeholder: "Username",
    icon: <FontAwesomeIcon icon={faUser} />,
    required: true,
    error:
      "Username should be 3-16 characters and shouldn't include any special characters!",
    pattern: "^[A-Za-z0-9]{3,16}",
  });
  const [email, emailInput] = useInput({
    type: "email",
    placeholder: "Email",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    required: true,
    error: "Something is wrong",
  });
  //TODO: Change datepicker style
  const [birthday, birthdayInput] = useInput({
    type: "date",
    icon: <FontAwesomeIcon icon={faCalendar} />,
  });
  const [password, passwordInput] = useInput({
    type: "password",
    placeholder: "Password",
    icon: <FontAwesomeIcon icon={faLock} />,
    required: true,
    error: "Something is wrong",
  });
  const [confirmPassword, confirmPasswordInput] = useInput({
    type: "password",
    placeholder: "Confirm Password",
    icon: <FontAwesomeIcon icon={faLock} />,
    required: true,
    pattern: password,
    error: "Should match the password",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`User info: ${username}, ${email}, ${birthday}, ${password}`);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1 className="text-5xl font-bold mb-10">Register</h1>
      {usernameInput}
      {emailInput}
      {birthdayInput}
      {passwordInput}
      {confirmPasswordInput}
      <div className="mt-10">
        <button
          type="submit"
          className="bg-[#6C63FF] text-white py-6 px-10 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
