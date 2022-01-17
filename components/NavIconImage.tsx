import React from "react";
import Image from "next/image";
import { INavIconImage } from "../types";

const NavIconImage = ({ icon }: INavIconImage) => {
  return (
    <Image
      src={`/images/${icon}.png`}
      layout="fill"
      //   height="25"
      //   width="25"
      className="cursor-pointer"
    />
  );
};

export default NavIconImage;
