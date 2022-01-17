import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import LinkIcon from "./LinkIcon";

const Sidebar = () => {
  return (
    <div className="hidden md:col-span-3 lg:col-span-2 md:flex md:flex-col md:items-center">
      <div className="relative glass-effect min-h-[150px] flex items-center justify-center">
        <Image src="/images/rasta_img.png" height="100" width="100" />
      </div>
      <div className="mt-5 relative glass-effect min-h-[100px] flex flex-col items-center justify-center space-y-6">
        <button className="btn-primary text-sm px-4 py-2">Resume</button>
        <div className="flex space-x-1 items-center justify-center">
          <LinkIcon url="https://www.github.com/xarmzon" icon={<FaGithub />} />
          <LinkIcon
            url="https://www.linkedin.com/rastaxarm"
            icon={<FaLinkedin />}
          />
          <LinkIcon
            url="https://api.whatsapp.com/+2348141161177"
            icon={<FaWhatsapp />}
          />
        </div>
      </div>
      <div>
        <button className="btn-primary px-4 py-2 mt-8 text-center text-sm">
          Email Me
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
