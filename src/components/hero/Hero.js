import React from 'react';
import { Link, scroller } from 'react-scroll';
import { FiChevronDown } from 'react-icons/fi';
import './_hero.scss';

export const Hero = () => {
  return <section className="hero">
    <h1>Melanie Cohen</h1>
    <h2>Hire me pls</h2>
    <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
      <FiChevronDown className="arrow-down" />
    </Link>
  </section>;
};

export default Hero;
