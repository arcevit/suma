import React from "react";
import { Link } from "react-router";

export const Nav: React.FC<
  {
    name: string;
    className?: string;
    to?: string;
  } & React.HTMLProps<HTMLAnchorElement>
> = ({ name, className = "", to = "/", ...rest }) => {
  return (
    <Link
      className={`block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 ${className}`}
      to={to}
      {...rest}
    >
      {name}
    </Link>
  );
};
