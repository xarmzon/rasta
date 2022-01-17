import Image from "next/image";
import Link from "next/link";
import React from "react";
import useDateTimestamp from "../hooks/useDateTimestamp";
import { navbarLinks } from "../libs/constants";
import NavIconImage from "./NavIconImage";
import dateformat from "dateformat";
import useActiveNavbar from "../hooks/useActiveNavbar";

const WindowsNavbar = () => {
  const { activeNavbar } = useActiveNavbar();
  const { timestamp } = useDateTimestamp();

  return (
    <div className="fixed bottom-0 inset-x-0 h-10 flex justify-between items-center bg-primary/60 backdrop-blur-sm shadow-sm">
      <div className="p-5 md:px-8 lg:px-12 w-full max-w-4xl lg:mx-auto flex justify-between items-center">
        <div className="icons-box" title={navbarLinks[0].name}>
          <NavIconImage icon={navbarLinks[0].icon} />
        </div>
        <div className="lg:space-x-6 flex space-x-3 md:space-x-6">
          {navbarLinks
            .filter((_, i) => i !== 0)
            .map((l) => (
              <div key={l.name} className={`icons-box`} title={l.name}>
                {activeNavbar === l.link && (
                  <span className="absolute -bottom-1 h-[2px] w-1/2 bg-secondary/80 rounded left-1/2 -translate-x-1/2"></span>
                )}
                {l.link ? (
                  <Link href={l.link}>
                    <a>
                      <NavIconImage icon={l.icon} />
                    </a>
                  </Link>
                ) : (
                  <NavIconImage icon={l.icon} />
                )}
              </div>
            ))}
        </div>
        <div>
          <div className="flex flex-col -space-y-1 text-sm">
            <span title="Time">{dateformat(timestamp, "isoTime")}</span>
            <span title="Date">{dateformat(timestamp, "shortDate")}</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WindowsNavbar;
