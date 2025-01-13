import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import emailjs from "emailjs-com";
import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useInView } from "react-intersection-observer";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_APP_EMAILJS_USER_ID
    );
    e.target
      .reset()

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section ref={ref} id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div data-aos="zoom-out" className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <GrMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>marquis4484@gmail.com</h5>
            <a
              href="mailto:marquis4484@gmail.com"
              target=" rel='noreferrer'_blank"
            >
              Send an Email
            </a>
          </article>

          <article className="contact_option">
            <FaLinkedin className="contact_option_icon" />
            <h4>LinkedIn</h4>
            <h5>Marquis Sampson</h5>
            <a
              href="https://www.linkedin.com/in/marquis-sampson/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact_option">
            <FaGithub className="contact_option_icon" />
            <h4>GitHub</h4>
            <a
              href="https://github.com/Marquis4484"
              target="_blank"
              rel="noreferrer"
            >
              View My Page
            </a>
          </article>
        </div>

        {/* =================== End of Contact Option ====================== */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
