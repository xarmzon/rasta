import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ILinkIcon } from "../types";

const LinkIcon = ({ url, icon }: ILinkIcon) => {
  return (
    <motion.a
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      href={url}
      target="_blank"
      className="h-6 w-6 text-sm md:text-lg md:h-8 md:w-8 rounded-full flex items-center justify-center transition-all duration-500"
    >
      {icon}
    </motion.a>
  );
};

export default LinkIcon;
