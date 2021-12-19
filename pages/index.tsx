import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { DEFAULT_TITLE, DESCRIPTION } from "../libs/constants";
import Welcome from "../components/Welcome";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
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

      <section>
        <Welcome />
      </section>
    </>
  );
}
