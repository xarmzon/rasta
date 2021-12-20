import Image from "next/image";
import React, { useEffect, useRef } from "react";
import useTypedJS from "../hooks/typedjs";

const texts = [
  "A FULL-STACK WEB DEV.",
  "A TEACHER",
  "A MATHEMATICIAN",
  "A GRAPHICS DESIGNER",
];

const Welcome = () => {
  const typedRef = useRef<HTMLSpanElement | null>(null);
  useTypedJS(typedRef, texts);
  return (
    <div className="text-primary-100  flex h-screen flex-col md:flex-row w-full items-center justify-center gap-4 md:gap-14">
      <div className="transition-all duration-700 w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full ring-2 ring-primary-100 overflow-hidden object-cover">
        <Image
          src="/images/rasta_1.jpg"
          width="100%"
          height="100%"
          layout="responsive"
          alt="Image of Adelola Kayode Samson (RastaXarm)"
          className="transition-all duration-700 hover:grayscale"
        />
      </div>
      <div className="text-primary-100 relative w-[70%] text-center md:text-left md:w-[50%] lg:w-[45%]">
        <h1 className="font-light text-2xl md:text-3xl lg:text-4xl">
          Hi, I am{" "}
          <span className="font-bold text-4xl md:text-5xl lg:text-6xl block">
            RastaXarm
          </span>
        </h1>
        <div className="font-light my-4">
          <span
            ref={typedRef}
            className="text-ascent uppercase text-xs sm:text-sm md:text-lg lg:text-xl"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
