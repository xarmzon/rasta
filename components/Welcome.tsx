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
  //const typedRef = useRef<HTMLSpanElement | null>(null);
  //useTypedJS(typedRef, texts);
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="md:p-8 mt-8 md:mt-0"
    >
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-light">
        Hello<span className="text-ascent">.</span>
      </h1>
      <h3 className="text-4xl md:text-5xl lg:text-6xl mt-4">
        I am <br />
        RastaXarm
      </h3>
      <p className="text-base mt-5 md:text-lg lg:text-xl max-w-md">
        A Full-Stack Web Developer, Graphics Designer and Teacher based in
        Nigeria.
      </p>
    </motion.div>
  );
};

export default Welcome;
