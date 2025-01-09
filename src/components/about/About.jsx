import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useEffect } from "react";
import Me from "../../assets/Headshot.jpeg";
import "./About.css";
import { FiAward, FiUsers } from "react-icons/fi";
import { ImFolderPlus } from "react-icons/im";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className="about_section" data-aos="fade-up-left" id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div>
          <div className="about_me">
            <img className="about_me_image" src={Me} alt="AboutPicture" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />

              <h5>Experience</h5>

              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />

              <h5>Clients</h5>

              <small>Worldwide</small>
            </article>

            <article className="about_card">
              <ImFolderPlus className="about_icon" />

              <h5>Projects</h5>

              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            I am a passionate Software Engineer specializing in Next.js, React,
            Tailwind CSS, JavaScript, TypeScript, Express, and Node.js. I am
            currently learning to work with MySQL, Swift, and MongoDB. I have
            over 5 years of experience building applications that can be viewed
            on the web.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
