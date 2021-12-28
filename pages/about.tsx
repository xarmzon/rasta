import { motion, Variants } from "framer-motion";
import { NextSeo } from "next-seo";
import React from "react";
import NexPageLinkButton from "../components/NexPageLinkButton";

const container: Variants = {
  initial: {
    opacity: 0,
    transition: { staggerChildren: 0.3 },
  },
  animate: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
};

const box: Variants = {
  initial: {
    x: 100,
    y: -100,
  },
  animate: {
    x: 0,
    y: 0,
    transition: { duration: 1, ease: "easeIn" },
  },
};

const AboutMe = () => {
  return (
    <>
      <NextSeo title="About Me" />
      <motion.div
        initial="initial"
        animate="animate"
        variants={container}
        className="pt-20 p-5 text-primary-100 flex justify-center items-center"
      >
        <motion.div
          variants={box}
          className="w-full  md:w-[80vh] border-2 border-x-primary-400 md:mx-auto p-5"
        >
          <h5 className="text-xl font-extralight">Hi, I am</h5>
          <h3 className="text-3xl font-bold">
            Adelola Kayode Samson (RastaXarm)
          </h3>
          <p className="mt-5 text-justify">
            A motivated and self-learned full-stack developer with a great
            passion for technology and software development. Likes to work with
            Object-Oriented Programming languages, frameworks with a preference
            to Python and JavaScript. A motivated and self-learned full-stack
            developer with a great passion for technology and software
            development. Likes to work with Object-Oriented Programming
            languages, frameworks with a preference to Python and JavaScript.
          </p>
        </motion.div>
        <NexPageLinkButton url="/portfolio" text="My Portfolio" />
      </motion.div>
    </>
  );
};

export default AboutMe;
