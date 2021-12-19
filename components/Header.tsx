import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiGridAlt, BiX } from "react-icons/bi";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header className="absolute top-0 left-0 w-full text-primary-100 h-18">
      <nav
        className={`flex justify-between items-center container px-5 my-5 h-full ${
          navOpen && "flex-row-reverse"
        } transition-all duration-700`}
      >
        <div className={`z-30 w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-14`}>
          <Link href="/">
            <a className="">
              <Image
                src={`/images/logo_5.svg`}
                alt="Rasta Brand Logo"
                width="100"
                height="50"
              />
            </a>
          </Link>
        </div>
        <div
          className={`z-30 cursor-pointer text-2xl transition-all duration-700`}
        >
          <span
            className="h-full w-full transition-all duration-700"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            {navOpen ? (
              <BiX className="hover:rotate-[20deg] hover:text-ascent text-3xl" />
            ) : (
              <BiGridAlt />
            )}
          </span>
        </div>
      </nav>
      <Navbar navOpen={navOpen} />
    </header>
  );
};

export default Header;
