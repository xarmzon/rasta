import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "../libs/constants";

interface INavbar {
  navOpen: boolean;
}

const Navbar = ({ navOpen }: INavbar) => {
  return (
    <div
      className={`absolute ${
        navOpen ? "inset-0 h-screen z-20" : "-left-full h-0 -top-full opacity-0"
      } bg-gray-900 bg-blend-multiply bg-computer2 bg-cover bg-center transition-all duration-700`}
    >
      <div className="relative container pt-20 px-5 flex justify-center items-center gap-16 text-primary-100 h-full">
        <div className="flex-1 border-b-4 border-l-8 border-b-primary-400 border-l-ascent rounded-full border-t-4 border-t-primary-100 overflow-hidden">
          <Image
            src={`/images/rasta_2.jpg`}
            width="100%"
            height="100%"
            layout="responsive"
            className="object-cover"
          />
        </div>
        <ul className="flex-1">
          {navLinks.map((link) => {
            return (
              <li
                key={link.url}
                className={`p-3 mb-3 last:mb-0 hover:bg-primary-50 hover:text-primary transition-all duration-700`}
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
