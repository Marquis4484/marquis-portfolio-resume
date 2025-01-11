import { motion } from "framer-motion";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 50 }}
      transition={{ type: "spring", bounce: 0.3, duration: 2 }}
      className="header_socials"
    >
      <a
        href="https://www.linkedin.com/in/marquis-sampson/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Marquis4484" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="mailto:marquis4484@gmail.com" target="_blank" rel="noreferrer">
        <GrMail />
      </a>
    </motion.div>
  );
};

export default HeaderSocials;
