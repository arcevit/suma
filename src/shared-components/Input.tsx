import React from "react";

export const Input: React.FC<
  {
    placeholder?: string;
    className?: string;
    name: string;
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ placeholder, className, name, ...rest }) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      className={`min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-800 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 ${className}`}
      {...rest}
    />
  );
};
