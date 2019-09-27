import React from 'react';
import './_resume.scss';

const Resume = ({ activeComponent }) => {
  if (activeComponent === 'Resume') {
    return <section className='resume' style={{ paddingBottom: '3rem' }}>
      <h3>Current</h3>
      <div className="item">
        <div className="item-img-container">
          <img src="../../assets/logos/mc-freelance.png"></img>
        </div>
        <div className="item-text">
          <h4>Freelance</h4>
          <p>January 2019 - August 2019</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </li>
          </ul>
        </div>
      </div>
      <div className="item">
        <div className="item-img-container">
          <img src="../../assets/logos/codefellows.png"></img>
        </div>
        <div className="item-text">
          <h4>Code Fellows Teaching Assistant</h4>
          <p>October 2019 - Present</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </li>
          </ul>
        </div>
      </div>

      <h3>Previous</h3>
      <div className="item">
        <div className="item-img-container">
          <img src="../../assets/logos/drift.png"></img>
        </div>
        <div className="item-text">
          <h4>Drift Marketplace</h4>
          <p>January 2019 - August 2019</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </li>
          </ul>
        </div>
      </div>
      <div className="item">
        <div className="item-img-container">
          <img src="../../assets/logos/csm-pacific.png"></img>
        </div>
        <div className="item-text">
          <h4>CSM Pacific</h4>
          <p>January 2019 - August 2019</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </li>
          </ul>
        </div>
      </div>
      <div className="item">
        <div className="item-img-container">
          <img src="../../assets/logos/carena.png"></img>
        </div>
        <div className="item-text">
          <h4>Carena, Inc.</h4>
          <p>January 2019 - August 2019</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </li>
          </ul>
        </div>
      </div>
      <div className="item">
        <div className="item-img-container">
          <img src="../../assets/logos/apple.png"></img>
        </div>
        <div className="item-text">
          <h4>Apple, Inc.</h4>
          <p>January 2019 - August 2019</p>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            <li>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </li>
          </ul>
        </div>
      </div>
      <h3>Education</h3>
      <div className="item">
        <h3>Extra Stuff</h3>
      </div>
    </section>;
  } else {
    return null;
  }
};

export default Resume;