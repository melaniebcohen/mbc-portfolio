import React, { Component } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./_contact.scss";

const Footer = ({ activeComponent }) => {
  if (activeComponent === "Contact") {
    return <section className="contact">
      <p>Reach out pls</p>

      <div>
        <a href="https://www.linkedin.com/in/cohenmelanie/" target="_blank" aria-label="LinkedIn - Opens in new tab">
          <FaLinkedinIn />
        </a>
        <a href="http://github.com/melaniebcohen" target="_blank" aria-label="Github - Opens in new tab">
          <FaGithub />
        </a>
        <a href="mailto:melaniebcohen@gmail.com" target="_blank" aria-label="Email - Opens in new tab">
          <FaEnvelope />
        </a>
      </div>
    </section>;
  } else {
    return null;
  }
};

export default Footer;
