import { useState } from "react";

const useInput = (props) => {
  const [value, setValue] = useState("");
  const { type, name, placeholder, icon, required, error, ...rest } = props;
  const [focused, setFocused] = useState("false");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocused = () => {
    setFocused("true");
  };

  const customInput = (
    <>
      <div className="py-2">
        <label className="pr-3" htmlFor={name}>
          {icon}
        </label>
        <input
          id={name}
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          type={type}
          placeholder={placeholder}
          className={`w-full appearance-none bg-transparent focus:outline-none border-b border-gray-500 peer ${
            focused === "true" ? "invalid:border-b-red-500" : null
          }`}
          required={required}
          onBlur={handleFocused}
          focused={focused.toString()}
          {...rest}
        />
        <span
          className={`hidden ${
            focused === "true"
              ? "peer-invalid:block peer-invalid:text-red-500 peer-invalid:text-sm"
              : "hidden"
          }`}
        >
          {error}
        </span>
      </div>
    </>
  );

  return [value, customInput];
};

export default useInput;
