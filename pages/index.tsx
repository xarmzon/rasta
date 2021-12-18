import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { DESCRIPTION } from "../libs/constants";
import Welcome from "../components/Welcome";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s | Rasta Portfolio"
        defaultTitle="Rasta Portfolio"
        description={DESCRIPTION}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />
      <header className="absolute top-0 left-0 w-full text-primary-100 h-18">
        <nav className="flex justify-between items-center container px-5 my-5 h-full">
          <div className="w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-14">
            <Link href="/">
              <a className="">
                <Image
                  src="/images/logo_5.svg"
                  alt="Rasta Brand Logo"
                  width="100"
                  height="50"
                />
              </a>
            </Link>
          </div>
          <div>toggle</div>
        </nav>
      </header>
      <section>
        <Welcome />
      </section>
    </>
  );
}
