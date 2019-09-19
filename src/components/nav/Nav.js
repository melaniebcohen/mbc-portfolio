import React, { Component } from 'react';
import './_nav.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'About',
      navItems: ['About', 'Resume', 'Contact'],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeComponent !== this.props.activeComponent) {
      this.setState({
        activeItem: this.props.activeComponent,
      });
    }
  }

  render() {
    const { toggleMenu } = this.props;
    const { navItems, activeItem } = this.state;

    return (
      <section className="nav">
        <div className="content">
          <div>
            <h1>Melanie Cohen</h1>
            <h2>Front-end Dev</h2>
          </div>
          <ul>
            {navItems.map((navItem, index) => 
              <li key={index} className={activeItem === navItem ? 'active' : null}>
                <a href="#" onClick={() => toggleMenu(navItem)}>{navItem}</a>
              </li>
            )}
          </ul>
        </div>
      </section>
    );
  }
};
