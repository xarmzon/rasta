import "../styles/globals.css";

import type { AppProps } from "next/app";
import Header from "../components/Header";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { DefaultSeo } from "next-seo";
import { DEFAULT_TITLE, DESCRIPTION } from "../libs/constants";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "../components/Contact";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const closeNav = () => navOpen && setNavOpen((prev) => false);
  return (
    <>
      <Header navOpen={navOpen} closeNav={closeNav} setNav={setNavOpen} />
      <Navbar navOpen={navOpen} closeNav={closeNav} />
      <div className="h-screen w-full bg-computer1 bg-blend-multiply bg-cover bg-center bg-body overflow-hidden">
        <DefaultSeo
          titleTemplate={`%s | ${DEFAULT_TITLE}`}
          defaultTitle={`${DEFAULT_TITLE}`}
          description={DESCRIPTION}
          additionalLinkTags={[
            {
              rel: "icon",
              href: "/favicon.ico",
            },
          ]}
        />
        <AnimatePresence exitBeforeEnter>
          <motion.div key={router.route} className="overflow-hidden">
            <Component {...pageProps} />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
