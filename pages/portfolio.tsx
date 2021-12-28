import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <NextSeo title="My Portfolio" />
      <motion.section
        initial={{ opacity: 0, x: -100, scale: 0.2 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="pt-20 p-5 text-primary-100"
      >
        Portfolio
      </motion.section>
    </>
  );
};

export default Portfolio;
