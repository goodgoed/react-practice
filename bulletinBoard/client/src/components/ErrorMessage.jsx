import React from "react";

const ErrorMessage = ({ message, className }) => {
  return <p className={`text-xs text-red-300 ${className}`}>{message}</p>;
};

export default ErrorMessage;
