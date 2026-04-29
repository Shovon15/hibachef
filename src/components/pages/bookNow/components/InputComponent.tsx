"use client";

import { useState } from "react";

const InputComponent = ({
  label,
  name,
  type = "text",
  className = "",
  value,
  onChange,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  [key: string]: any;
  className?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value !== "" && value !== undefined;

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    rest.onBlur?.(e);
  };

  
  // console.log("Rendering InputComponent:", {
  //   name,
  //   value,
  // });
  return (
    <div className={`relative z-0 w-full ${className}`}>
      <input 
        {...rest}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id={name}
        type={type}
        value={value}
        name={name}
        placeholder=" "
        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#E4002B] peer transition-colors duration-200 font-graphikTrial font-medium text-sm lg:text-base text-[#000000]"
      />
      <label
        htmlFor={name}
        className={`absolute origin-0 transition-all duration-300 pointer-events-none font-medium font-graphikTrial ${
          isFocused || hasValue
            ? "-top-2 text-xs text-[#EE1F26]  "
            : "top-3 text-base text-[#ADADAD]"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputComponent;
