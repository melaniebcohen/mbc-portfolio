import React, { Fragment, Component } from 'react';

import Nav from '../nav/Nav';
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';
import Contact from '../contact/Contact';
import Resume from '../resume/Resume';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'About',
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(link) {
    console.log(link);
    this.setState = {
      activeComponent: link,
    };
  }

  render() {
    const { activeComponent } = this.state;

    return <Fragment>
      <Nav activeComponent={this.state.activeComponent} toggleMenu={this.toggleMenu} />
      <About activeComponent={this.state.activeComponent} />
      <Resume activeComponent={activeComponent} />
      <Contact activeComponent={activeComponent} />
    </Fragment>;
  }
}

export default Home;