import type { AppProps } from "next/app";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { DefaultSeo } from "next-seo";
import { DEFAULT_TITLE, DESCRIPTION } from "../libs/constants";
import { AnimatePresence, motion } from "framer-motion";
import Contact from "../components/Contact";
import NProgress from "nprogress";
import { useRouter } from "next/router";

import "nprogress/nprogress.css";
import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import MainContents from "../components/MainContents";
import WindowsNavbar from "../components/WindowsNavbar";

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps, router }: AppProps) {
  //const router2 = useRouter();

  useEffect(() => {
    const startProgress = () => NProgress.start();
    const stopProgress = () => NProgress.done();

    router.events.on("routeChangeStart", startProgress);
    router.events.on("routeChangeComplete", stopProgress);
    router.events.on("routeChangeError", stopProgress);

    return () => {
      router.events.off("routeChangeStart", startProgress);
      router.events.off("routeChangeComplete", stopProgress);
      router.events.off("routeChangeError", stopProgress);
    };
  }, [router]);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const closeNav = () => navOpen && setNavOpen((prev) => false);
  return (
    <>
      {/* <Header navOpen={navOpen} closeNav={closeNav} setNav={setNavOpen} /> */}
      {/* <Navbar navOpen={navOpen} closeNav={closeNav} /> */}
      <div className="h-screen w-full bg-windows11 bg-blend-multiply bg-cover bg-center bg-primary text-secondary overflow-hidden">
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
          <motion.div
            key={router.route}
            className="overflow-hidden grid md:grid-cols-12 fixed top-8 left-4 right-4 bottom-12 md:inset-12 gap-x-7 max-w-4xl lg:mx-auto"
          >
            <Sidebar />
            <MainContents>
              <Component {...pageProps} />
            </MainContents>
            {/* <Contact /> */}
          </motion.div>
        </AnimatePresence>
        <WindowsNavbar />
      </div>
    </>
  );
}

export default MyApp;
