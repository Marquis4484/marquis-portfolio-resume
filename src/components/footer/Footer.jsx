import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Marquis Sampson
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

       

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <div whilehover={{ scale: 1.1 }}>
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div whilehover={{ scale: 1.1 }}>
          <a href="mailto:marquis4484@gmail.com" target=" rel='noreferrer'_blank">
            <GrMail />
          </a>
        </div>
        <div whilehover={{ scale: 1.1 }}>
          <a
            href="https://github.com/Marquis4484"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="footer_copyright">
        <small>
          &copy; Marquis Sampson. All rights reserved {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
