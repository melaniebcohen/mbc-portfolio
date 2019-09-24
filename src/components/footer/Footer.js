import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import './_footer.scss';

const Footer = () => {
  return <section className='footer'>
    <a href="https://www.linkedin.com/in/cohenmelanie/" target="_blank">
      <FaLinkedinIn />
    </a>
    <a href="http://github.com/melaniebcohen" target="_blank">
      <FaGithub />
    </a>
    <a href="http://github.com/melaniebcohen" target="_blank">
      <FaEnvelope />
    </a>
  </section>;
};

export default Footer;