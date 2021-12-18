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
      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-x-10 lg:gap-x-16 gap-y-5 md:gap-y-0 w-full md:w-[75%]">
        <div className="transition-all duration-700 w-40 h-40 md:w-50 md:h-50 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-2 ring-primary-100 hover:ring-primary-400">
          <img
            src="images/rasta_1.jpg"
            alt="rasta_1.jpg"
            className="transition-all duration-700 object-cover hover:scale-125 hover:rotate-[360deg]"
          />
        </div>
        <div className="text-primary-100 relative w-[65%] text-center md:text-left sm:w-[60%] lg:w-[45%]">
          <h1 className="font-light text-2xl">
            Hi, I am <span className="font-bold text-4xl block">RastaXarm</span>
          </h1>
          <div className="font-light my-4 lg:max-w-[60%]">
            <span
              ref={typedRef}
              className="text-ascent uppercase text-xs md:text-sm"
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
