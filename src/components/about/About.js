import React from 'react';
import './_about.scss';

const About = ({ activeComponent }) => {  
  if (activeComponent === 'About') {
    return (
      <section className='about'>
        <img src='../../../assets/mbc.jpg' />
        <div id='about-col-2'>
          <p>Front-end JavaScript developer with a background in sales operations and program management. I thrive in team-based environments and mission-driven organizations. Passionate about using code and emerging technologies to empower customers and developers alike.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default About;