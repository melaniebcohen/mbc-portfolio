import React, { Component, Fragment } from 'react';
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from 'react-icons/fi';
import './_contact.scss';

const Contact = () => {
  return <section className='contact'>
    <h2>Contact</h2>
    <div>
      <div>
        <FiLinkedin />
        <a href='https://www.linkedin.com/in/cohenmelanie/'>LinkedIn</a>
      </div>
      <div>
        <FiGithub />
        <a href='http://github.com/melaniebcohen'>GitHub</a>
      </div>
      <FiMail />

    </div>
  </section>;
};

export default Contact;