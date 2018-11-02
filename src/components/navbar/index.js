import React, { Component } from 'react';
import { FiHome, FiUser, FiBriefcase, FiMessageSquare } from 'react-icons/fi';
import './_navbar-style.scss';

export default class NavBar extends Component {
  render() {
    return <section className='navbar'>
      <ul>
        <li>
          <FiHome className='icon' />
          <p className='icon-text'>Home</p>
        </li>
        <li>
          <FiUser className='icon' />
          <p className='icon-text'>About</p>
        </li>
        <li>
          <FiBriefcase className='icon' />
          <p className='icon-text'>Portfolio</p>
        </li>
        <li>
          <FiMessageSquare className='icon' />
          <p className='icon-text'>Contact</p>
        </li>
      </ul>
    </section>;
  }
}