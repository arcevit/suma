import React from "react";

export const H1: React.FC<
  { text: string; className?: string } & React.HTMLProps<HTMLHeadingElement>
> = ({ text, className, ...rest }) => (
  <h1
    className={`text-3xl font-bold tracking-tight text-gray-900 first-letter:uppercase ${className}`}
    {...rest}
  >
    {text}
  </h1>
);
