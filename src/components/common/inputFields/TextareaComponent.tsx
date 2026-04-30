"use client";

import { useState } from "react";

const TextareaComponent = ({
  label,
  name,
  className = "",
  inputTextColor = "text-[#000000]",
  value,
  onChange,
  ...rest
}: {
  label: string;
  name: string;
  [key: string]: any;
  className?: string;
  value?: string | number;
  onChange?: (e: any) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value !== "" && value !== undefined;

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    rest.onBlur?.(e);
  };

  
  // console.log("Rendering InputComponent:", {
  //   name,
  //   value,
  // });
  return (
    <div className={`relative z-0 w-full ${className}`}>
      <textarea 
       {...rest}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=" "
        className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b border-[#6C757D] appearance-none focus:outline-none focus:ring-0 focus:border-[#E4002B] peer transition-colors duration-200 font-graphikTrial font-medium text-sm lg:text-base ${inputTextColor} `}
      />
      <label
        htmlFor={name}
        className={`absolute origin-0 transition-all duration-300 pointer-events-none font-medium font-graphikTrial ${
          isFocused || hasValue
            ? "-top-2 text-xs text-[#EE1F26]"
            : "top-3 text-base text-[#ADADAD]"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextareaComponent;
