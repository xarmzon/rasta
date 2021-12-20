import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "../libs/constants";
import { INavbar } from "../types";

const Navbar = ({ navOpen, closeNav }: INavbar) => {
  return (
    <div
      className={`absolute ${
        navOpen ? "inset-0 z-10" : "-left-full h-0 -z-20 -top-full opacity-0"
      } bg-gray-900 bg-blend-multiply bg-computer2 bg-cover bg-center transition-all duration-700`}
    >
      <div className="relative container pt-20 px-5 flex justify-center items-center gap-8 md:gap-12 lg:gap-16 text-primary-100 h-full">
        <div className="flex-1 border-b-4 hover:border-b-8 border-l-8 hover:border-l-4 border-b-primary-400 hover:border-b-ascent border-l-ascent hover:border-l-primary-400 rounded-full border-t-4 border-t-primary-100 overflow-hidden transition-all duration-700">
          <Image
            src={`/images/rasta_2.jpg`}
            width="100%"
            height="100%"
            layout="responsive"
            alt="Image of Adelola Kayode Samson (RastaXarm)"
            className="object-cover"
          />
        </div>
        <ul className="flex-1">
          {navLinks.map((link) => {
            return (
              <li
                key={link.url}
                onClick={closeNav}
                className={`p-2 mb-2 last:mb-0 hover:bg-primary-50 hover:text-primary transition-all duration-700`}
              >
                <Link href={link.url}>
                  <a>{link.text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
