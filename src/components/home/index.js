import React, { Fragment } from 'react';

import NavBar from './../navbar';
import Portfolio from './../portfolio';
import About from './../about';
import Contact from './../contact';
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