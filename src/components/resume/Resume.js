import React from 'react';
import './_resume.scss';

const Resume = ({ activeComponent }) => {
  if (activeComponent === 'Resume') {
    return <section className='resume' style={{ paddingBottom: '3rem' }}>
      <div>
        <h3>Current</h3>
        <div>
          <img src="../../assets/logos/code-fellows.png"></img>
          <h4>Code Fellows TA</h4>
        </div>
        <div>
          <h4>Freelance</h4>
        </div>
      </div>
      <div>
        <h3>Previous</h3>
        <div>
          <img src="../../assets/logos/drift.png"></img>
          <h4>Drift</h4>
        </div>
        <div>
          <img src="../../assets/logos/csm-pacific.png"></img>
          <h4>CSM Pacific</h4>
        </div>
        <div>
          <img src="../../assets/logos/carena.png"></img>
          <h4>Carena</h4>
        </div>
        <div>
          <img src="../../assets/logos/apple.png"></img>
          <h4>Apple</h4>
        </div>
      </div>
      <div>
        <h3>Education</h3>
      </div>
      <div>
        <h3>Extra Stuff</h3>
      </div>
    </section>;
  } else {
    return null;
  }
};

export default Resume;