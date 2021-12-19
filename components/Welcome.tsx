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
    <div className="h-screen w-full flex flex-wrap justify-center items-center bg-computer1 bg-blend-multiply bg-cover bg-center bg-body gap-x-10">
      <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-center items-center gap-x-10 lg:gap-x-16 gap-y-5 md:gap-y-0 w-full md:w-[75%]">
        <div className="transition-all duration-700 w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full ring-2 ring-primary-100 overflow-hidden object-cover">
          <img
            src="images/rasta_1.jpg"
            alt="RastaXarm Passport"
            className="transition-all duration-700 hover:grayscale"
          />
        </div>
        <div className="text-primary-100 relative w-[65%] text-center md:text-left sm:w-[60%] lg:w-[45%]">
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
    </div>
  );
};

export default Welcome;
