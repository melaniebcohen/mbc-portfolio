import React, { Component } from 'react';
import { FiHome, FiUser, FiBriefcase, FiMessageSquare } from 'react-icons/fi';
import './_navbar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
  }
  
  render() {
    return <section className='navbar'>
      <ul>
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