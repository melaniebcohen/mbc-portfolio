import React, { Component } from 'react';

import NavBar from './../navbar';
import Portfolio from './../portfolio';
import About from './../about';
import Contact from './../contact';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}