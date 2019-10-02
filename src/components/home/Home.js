import React, { Fragment, Component } from "react";

import Nav from "../nav/Nav";
import About from "../about/About";
import Contact from "../contact/Contact";
import Resume from "../resume/Resume";
import Footer from "../footer/Footer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: "About",
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(link) {
    return this.setState({ activeComponent: link });
  }

  render() {
    const { activeComponent } = this.state;

    return (
      <Fragment>
        <Nav activeComponent={activeComponent} toggleMenu={this.toggleMenu} />
        <About activeComponent={activeComponent} />
        <Resume activeComponent={activeComponent} />
        <Contact activeComponent={activeComponent} />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;