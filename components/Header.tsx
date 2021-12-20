import Image from "next/image";
import Link from "next/link";
import { BiGridAlt, BiX } from "react-icons/bi";
import { IHeader } from "../types";

const Header = ({ navOpen, closeNav, setNav }: IHeader) => {
  return (
    <header className="z-20 fixed w-full text-primary-100 h-16">
      <nav
        className={`flex justify-between items-center container px-5  h-full ${
          navOpen && "flex-row-reverse"
        } transition-all duration-700`}
      >
        <div
          onClick={closeNav}
          className={`w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-14`}
        >
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
        <div className={`cursor-pointer text-2xl transition-all duration-700`}>
          <span
            className="h-full w-full transition-all duration-700"
            onClick={() => setNav((prev) => !prev)}
          >
            {navOpen ? (
              <BiX className="hover:rotate-[20deg] hover:text-ascent text-3xl" />
            ) : (
              <BiGridAlt />
            )}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
