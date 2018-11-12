import React, { Component } from 'react';
import { Link, scroller } from 'react-scroll';
import { FiHome, FiUser, FiBriefcase, FiMessageSquare } from 'react-icons/fi';
import './_navbar.scss';

export default class NavBar extends Component {
  render() {
    return <section className='navbar'>
      <ul>
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
            <FiUser className='icon' />
            <p className='icon-text'>About</p>
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={1000}>
            <FiBriefcase className='icon' />
            <p className='icon-text'>Portfolio</p>
          </Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>
            <FiMessageSquare className='icon' />
            <p className='icon-text'>Contact</p>
          </Link>
        </li>
      </ul>
    </section>;
  }
}