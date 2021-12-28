import { motion, Variants } from "framer-motion";
import Link from "next/link";
import React from "react";
import { INexPageLinkButton } from "../types";

const slideUp: Variants = {
  initial: {
    opacity: 0,
    y: 1000,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 350 },
  },
};

const NexPageLinkButton = ({ url, text }: INexPageLinkButton) => {
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
      className="absolute bottom-[5%] w-full text-center"
    >
      <Link href={url}>
        <a className="cursor-pointer px-5 py-2 text-primary-400 border border-primary-400 rounded hover:bg-primary-100 hover:border-transparent hover:text-primary duration-700 transition-all">
          {text}
        </a>
      </Link>
    </motion.div>
  );
};

export default NexPageLinkButton;
