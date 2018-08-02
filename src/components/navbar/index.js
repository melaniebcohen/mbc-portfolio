import React, { Component, Fragment } from 'react';
import './_navbar-style.scss';

export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <div className='navbar'>
          <h1>Melanie Cohen</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}