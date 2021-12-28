import Link from "next/link";
import React from "react";
import { ILinkIcon } from "../types";

const LinkIcon = ({ url, icon }: ILinkIcon) => {
  return (
    <a
      href={url}
      target="_blank"
      className="text-primary-100 bg-primary hover:bg-primary-100 hover:text-primary hover:rotate(20deg) h-6 w-6 text-sm md:text-lg md:h-8 md:w-8 rounded-full flex items-center justify-center transition-all duration-500"
    >
      {icon}
    </a>
  );
};

export default LinkIcon;
