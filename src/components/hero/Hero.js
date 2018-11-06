import React from 'react';
import { Link, scroller } from 'react-scroll';
import { FiChevronDown } from 'react-icons/fi';
import './_hero.scss';

const Hero = () => {
  return <section className='hero'>
    <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
      <FiChevronDown className='arrow-down' />
    </Link>
  </section>;
};

export default Hero;
