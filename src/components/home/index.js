import React, { Fragment } from 'react';

import NavBar from './../navbar';
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';
import Contact from '../contact/Contact';
import Hero from '../hero/Hero';
import Header from '../header/Header';

const Home = () => {
  return <Fragment>
    <Header />
    <NavBar />
    <Hero />
    <About />
    <Portfolio />
    <Contact />
  </Fragment>;
};

export default Home;