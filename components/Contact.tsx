import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import LinkIcon from "./LinkIcon";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-5 absolute bottom-10 right-2 md:bottom-5 md:right-5 items-center">
      <LinkIcon url="https://www.github.com/xarmzon" icon={<FaGithub />} />
      <LinkIcon
        url="https://www.linkedin.com/in/rastaxarm"
        icon={<FaLinkedin />}
      />
      <LinkIcon url="https://www.twitter.com/rastaxarm" icon={<FaTwitter />} />
    </div>
  );
};

export default Contact;
