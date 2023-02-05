import React from "react";

const Button = ({ desc, className, onClick = null, onKeyDown = null }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`py-2 px-4 rounded-md text-white bg-navy-400 ${className}`}
    >
      {desc}
    </button>
  );
};

export default Button;
