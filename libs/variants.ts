import { Variants } from "framer-motion";

export const container: Variants = {
  initial: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export const image: Variants = {
  initial: {
    x: -100,
    rotateZ: -50,
    scale: 0,
  },
  animate: {
    x: 0,
    rotateZ: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: 100,
    rotateZ: -50,
    transition: { duration: 0.4 },
  },
};

export const greeting: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const greeting2: Variants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.8, ease: "easeIn" },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const greeting3: Variants = {
  initial: {
    opacity: 0,
    scale: 1.5,
    y: 200,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeIn" },
  },
  exit: {
    opacity: 0,
    scale: 0,
    x: -100,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const slideUp = (amount: number = 1000): Variants => {
  return {
    initial: {
      opacity: 0,
      y: amount,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 350 },
    },
  };
};

export const aboutContainer: Variants = {
  initial: {
    opacity: 0,
    transition: { staggerChildren: 0.3 },
  },
  animate: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
};

export const box: Variants = {
  initial: {
    x: -100,
    y: -100,
  },
  animate: {
    x: 0,
    y: 0,
    transition: { duration: 1, stiffness: 200, type: "spring" },
  },
  exit: {
    opacity: 0,
    width: 0,
    y: "100vh",
    transition: { duration: 1, ease: "easeOut" },
  },
};
