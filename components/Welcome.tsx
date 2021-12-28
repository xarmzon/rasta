import { motion, Variant, Variants } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import useTypedJS from "../hooks/typedjs";
import {
  container,
  greeting,
  greeting2,
  greeting3,
  image,
} from "../libs/variants";

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
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="text-primary-100  flex h-screen flex-col md:flex-row w-full items-center justify-center gap-4 md:gap-14"
    >
      <motion.div
        variants={image}
        initial="initial"
        animate="animate"
        className="transition-all duration-700 w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full ring-2 ring-primary-100 overflow-hidden object-cover"
      >
        <Image
          src="/images/rasta_1.jpg"
          width="100%"
          height="100%"
          layout="responsive"
          alt="Image of Adelola Kayode Samson (RastaXarm)"
          className="transition-all duration-700"
        />
      </motion.div>
      <motion.div
        variants={greeting3}
        className="text-primary-100 relative w-[70%] text-center md:text-left md:w-[50%] lg:w-[45%]"
      >
        <motion.h1
          variants={greeting}
          className="font-light text-2xl md:text-3xl lg:text-4xl"
        >
          Hi, I am{" "}
          <motion.span
            variants={greeting2}
            className="font-bold text-4xl md:text-5xl lg:text-6xl block"
          >
            RastaXarm
          </motion.span>
        </motion.h1>
        <div className="font-light my-4">
          <motion.span
            variants={greeting3}
            ref={typedRef}
            className="text-ascent uppercase text-xs sm:text-sm md:text-lg lg:text-xl"
          ></motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;
