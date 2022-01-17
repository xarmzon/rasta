import { motion, Variants } from "framer-motion";
import { NextSeo } from "next-seo";
import React from "react";
import NexPageLinkButton from "../components/NexPageLinkButton";
import PageHeading from "../components/PageHeading";
import { aboutContainer, box } from "../libs/variants";

const AboutMe = () => {
  return (
    <>
      <NextSeo title="About Me" />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={aboutContainer}
        className=""
      >
        <PageHeading title="About Me" />
        <div className="flex flex-col space-y-3 w-[95%]">
          <p>Hi there👋, I am</p>
          <p>Kayode Samson Adelola - but I enjoyed being called RastaXarm.</p>
          <p>
            A professional and talented Full-Stack Web Developer from Nigeria. A
            400 level student currently studying Mathematics from Better by Far
            University, University of Ilorin, Ilorin Kwara State Nigeria.
          </p>
          <p>
            I build and develop websites with HTML, CSS and JavaScript and I
            have worked on the web for over 3 years with experience ranging from
            VueJS, ReactJS, NextJs, TailwindCSS, TypeScript, CSS, MongoDB,
            Flask(Python), ExpressJS(NodeJS), SQLAlchemy etc.
          </p>
          <p>
            Being a diligent, hardworking, and result-oriented lad, I always
            strive hard towards achieving the best results on each project/task
            I lay my hands on and I am passionate about leveraging my diverse
            experience to solve challenging problems and create delightful
            experiences.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
