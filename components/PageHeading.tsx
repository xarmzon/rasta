import React from "react";
import { IPageHeading } from "../types";

const PageHeading = ({ title }: IPageHeading) => {
  return (
    <h1 className="relative text-3xl my-3 font-bold max-w-max">
      <span className="absolute h-[2px] rounded-full w-1/2 bg-ascent/50 bottom-0 left-0"></span>
      {title}
    </h1>
  );
};

export default PageHeading;
