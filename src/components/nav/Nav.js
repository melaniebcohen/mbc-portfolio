import React from 'react';
import './_nav.scss';

const Nav = () => {
  return <section className="nav">
    <div className="content">
      <div>
        <h1>Melanie Cohen</h1>
        <h2>Front-end Dev</h2>
      </div>
      <ul>
        <li className="active">
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        {/* <li>Portfolio</li> */}
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </section>;
};

export default Nav;