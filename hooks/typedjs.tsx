import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const useTypedJS = (
  typedRef: React.MutableRefObject<HTMLElement>,
  texts: string[]
) => {
  useEffect(() => {
    const typed = new Typed(typedRef?.current, {
      strings: texts,
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: " 💻",
    });
    return () => {
      typed.destroy();
    };
  }, []);
};

export default useTypedJS;
