"use client";

import { useState } from "react";

const InputComponent = ({
  label,
  name,
  type = "text",
  className = "",
  inputTextColor = "text-[#000000]",
  value,
  islabelActive = false,
  required = false,
  onChange,
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  [key: string]: any;
  className?: string;
  value?: string | number;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value !== "" && value !== undefined && Number(value) > 0;

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
      <label
        htmlFor={name}
        className={` origin-0 transition-all duration-300 pointer-events-none  font-graphikTrial ${
          islabelActive
            ? isFocused
              ? " -top-4 text-xs text-[#EE1F26] font-normal"
              : " -top-4 text-base text-[#151515] font-medium"
            : isFocused || hasValue
              ? " absolute -top-2 text-xs text-[#EE1F26] font-medium"
              : " absolute top-3 text-base text-[#ADADAD] font-medium"
        }`}
      >
        {label}{" "}
        <span
          className={`${required ? " " : "hidden"} text-[#EE1F26] text-base `}
        >
          *
        </span>
      </label>
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
        required={required}
        className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b border-[#6C757D] appearance-none focus:outline-none focus:ring-0 focus:border-[#E4002B] peer transition-colors duration-200 font-graphikTrial font-medium text-sm lg:text-base ${inputTextColor} ${islabelActive ? (isFocused || hasValue ? "text-[#000000]" : "text-[#A9A9A9]") : ""} `}
      />
    </div>
  );
};

export default InputComponent;
