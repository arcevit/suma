import React from "react";

export const Badge: React.FC<
  {
    text: string;
    className?: string;
    color?: "blue" | "gray" | "red";
  } & React.HTMLAttributes<HTMLSpanElement>
> = ({ text, className = "", color = "blue", ...rest }) => {
  return (
    <span
      className={`bg-${color}-100 text-${color}-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-${color}-900 dark:text-${color}-300 ${className}`}
      {...rest}
    >
      {text}
    </span>
  );
};
