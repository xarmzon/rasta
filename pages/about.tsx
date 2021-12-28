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
    x: -100,
    y: -100,
  },
  animate: {
    x: 0,
    y: 0,
    transition: { duration: 1, ease: "easeIn" },
  },
  exit: {
    opacity: 0,
    width: 0,
    y: "100vh",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const AboutMe = () => {
  return (
    <>
      <NextSeo title="About Me" />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={container}
        className="overflow-hidden pt-20 p-5 text-primary-100 flex justify-center items-center"
      >
        <motion.div
          variants={box}
          className="w-full  md:w-[60vw] border-2 border-x-primary-400 md:mx-auto p-3 pr-4 md:p-5"
        >
          <h5 className="text-xs md:text-xl font-extralight">
            Hi there👋, I am
          </h5>
          <h3 className="md:text-3xl text-lg font-bold">
            Kayode Samson Adelola - but I enjoyed being called RastaXarm.
          </h3>
          <div className="text-xs sm:text-sm md:text-base">
            <p className="mt-5 text-justify">
              A professional and talented Full-Stack Web Developer from Nigeria.
              A 400 level student currently studying Mathematics from Better by
              Far University, University of Ilorin, Ilorin Kwara State Nigeria.
            </p>
            <p className="mt-5 text-justify">
              I build and develop websites with HTML, CSS and JavaScript and I
              have worked on the web for over 3 years with experience ranging
              from VueJS, ReactJS, NextJs, TailwindCSS, TypeScript, CSS,
              MongoDB, Flask(Python), ExpressJS(NodeJS), SQLAlchemy etc.
            </p>
            <p className="mt-5 text-justify">
              Being a diligent, hardworking, and result-oriented lad, I always
              strive hard towards achieving the best results on each
              project/task I lay my hands on and I am passionate about
              leveraging my diverse experience to solve challenging problems and
              create delightful experiences.
            </p>
            {/* <p className="mt-5 text-justify">
              I strengthened my skills in Web Development, Graphics Designs, and
              Teaching others by sharing and contributing to the IT community is
              something I enjoy doing, and it has become an important aspect of
              me and I enjoy sharing what I've learned.
            </p> */}
          </div>
        </motion.div>
        <NexPageLinkButton url="/portfolio" text="My Portfolio" />
      </motion.div>
    </>
  );
};

export default AboutMe;
