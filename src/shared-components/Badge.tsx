import React from "react";

export const Badge: React.FC<
  {
    text: string;
    className?: string;
    color?: "blue" | "gray" | "red" | "green" | "yellow";
  } & React.HTMLAttributes<HTMLSpanElement>
> = ({ text, className = "", color = "blue", ...rest }) => {
  return (
    <span
      className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm ${badgeVariants[color]} ${className}`}
      {...rest}
    >
      {text}
    </span>
  );
};

const badgeVariants = {
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  gray: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  yellow:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
};
