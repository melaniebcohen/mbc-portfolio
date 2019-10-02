import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./_footer.scss";

const Footer = () => {
  return <section className='footer'>
    <a href="https://www.linkedin.com/in/cohenmelanie/" target="_blank" aria-label="LinkedIn - Opens in new tab">
      <FaLinkedinIn />
    </a>
    <a href="http://github.com/melaniebcohen" target="_blank" aria-label="Github - Opens in new tab">
      <FaGithub />
    </a>
    <a href="mailto:melaniebcohen@gmail.com" target="_blank" aria-label="Email - Opens in new tab">
      <FaEnvelope />
    </a>
  </section>;
};

export default Footer;