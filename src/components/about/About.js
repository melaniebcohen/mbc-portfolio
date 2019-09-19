import React, { Component, Fragment } from 'react';
import './_about.scss';

class About extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps)
    console.log('this props', this.props)
  }
  

  render() {
    const { activeComponent } = this.props;

    console.log('About activeComponent', this.props.activeComponent)

    return <section className='about' id='aboutContainer'>
      <section>
        <div id='about-col-1'>
          <img src='../../../assets/mbc.jpg' />
        </div>
        <div id='about-col-2'>
          <p>Front-end JavaScript developer with a background in sales operations and program management. I thrive in team-based environments and mission-driven organizations. Passionate about using code and emerging technologies to empower customers and developers alike.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
    </section>;
  }
}

export default About;