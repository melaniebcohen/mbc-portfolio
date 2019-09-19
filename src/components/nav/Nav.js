import React, { Fragment, Component } from 'react';
import './_nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeComponent, toggleMenu } = this.props;

    return <Fragment>
      <section className="nav">
        <div className="content">
          <div>
            <h1>Melanie Cohen</h1>
            <h2>Front-end Dev</h2>
          </div>
          <ul>
            <li className="active">
              <a href="#" onClick={() => toggleMenu('About')}>About</a>
            </li>
            <li>
              <a href="#" onClick={() => toggleMenu('Resume')}>Resume</a>
            </li>
            <li>
              <a href="#" onClick={() => toggleMenu('Contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>;
  }
};

export default Nav;