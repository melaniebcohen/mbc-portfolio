import React, { Fragment } from 'react';

import Nav from '../nav/Nav';
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';
import Contact from '../contact/Contact';
import Resume from '../resume/Resume';

const Home = () => {
  return <Fragment>
    <Nav />
    <About />
    {/* <Portfolio /> */}
    <Resume />
    <Contact />
  </Fragment>;
};

export default Home;