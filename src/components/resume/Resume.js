import React from "react";
import "./_resume.scss";

const Resume = ({ activeComponent }) => {
  if (activeComponent === "Resume") {
    return <section className='resume' style={{ paddingBottom: "3rem" }}>
      <h3>Current Experience</h3>
      <div className="item">
        <div className="item-img-container">
          <img alt="" src="../../assets/logos/mc-freelance.png"></img>
        </div>
        <div className="item-text">
          <h4>Freelance Web Developer</h4>
          <p>January 2019 - August 2019</p>
        </div>
      </div>
      <div className="item">
        <div className="item-img-container">
          <img alt="" src="../../assets/logos/codefellows.png"></img>
        </div>
        <div className="item-text">
          <h4>Code Fellows Teaching Assistant</h4>
          <p>October 2019 - Present</p>
        </div>
      </div>

      <h3>Previous Experience</h3>
      <div className="item">
        <div className="item-img-container">
          <img alt="" src="../../assets/logos/drift.png"></img>
        </div>
        <div className="item-text">
          <h4>Drift Marketplace</h4>
          <p>Front End Software Engineer | January 2019 - August 2019</p>
          <ul>
            <li>Contributed to codebase across a wide range of technologies, including customer-facing UI code, Golang and Elixir templates, and server features</li>
            <li>Worked with a small team to develop and release a time-sensitive website redesign, including extensive cross-browser testing and accessibility updates based on W3C WCAG 2.0 standards</li>
            <li>Implemented data-driven and interactive user dashboards using Google Chart and MapBox APIs</li>
            <li>Served as technical lead on two key projects; collaborated with Product, Engineering, and Design teams to prioritize feature development and set consistent expectations about engineering time and resources needed</li>
          </ul>
        </div>
      </div>
      <div className="item">
        <div className="item-img-container">
          <img alt="" src="../../assets/logos/csm-pacific.png"></img>
        </div>
        <div className="item-text">
          <h4>CSM Pacific</h4>
          <p>Junior Software Developer (Contract) | January 2019 - August 2019</p>
          <ul>
            <li>Developed full-stack web application using the MERN stack to facilitate migration from a legacy deferred compensation Excel workbook to a secure online portal</li>
            <li>Translated wireframes and business specifications into reusable React components using Material UI</li>
            <li>Wrote technical product documentation for application functionality and detailed manuals for end-users</li>
          </ul>
        </div>
      </div>
      <div className="item">
        <div className="item-img-container">
          <img alt="" src="../../assets/logos/carena.png"></img>
        </div>
        <div className="item-text">
          <h4>Carena, Inc. (now American Well)</h4>
          <p>Product Owner | January 2017 - October 2017</p>
          <ul>
            <li>Authored and managed product specifications for the consolidation of legacy applications into a new platform</li>
            <li>Worked cross-functionally with company leadership, User Experience, Program Management, Software Development, and Clinic staff to capture feature requirements, conduct feasibility analyses, prioritize feature lists (e.g., product backlogs), and facilitate gate reviews</li>
          </ul>

          <p>Sales Programs Manager | March 2014 - December 2016</p>
          <ul>
            <li>Hired, trained, and managed five direct reports on the Sales Programs and Business Development teams</li>
            <li>Implemented and administered company instances of Salesforce CRM and SalesLoft platforms; oversaw company-wide usage of both platforms including security measures and ongoing data integrity initiatives</li>
          </ul>
        </div>
      </div>
      <div className="item">
        <div className="item-img-container">
          <img alt="" src="../../assets/logos/apple.png"></img>
        </div>
        <div className="item-text">
          <h4>Apple, Inc.</h4>
          <p>Business Specialist | June 2009 - February 2014</p>
          <ul>
            <li>Led customer service operations of a high-growth sales team and managed implementation of an internal systems upgrade for four stores resulting in top 1% worldwide ranking for new technology acceptance</li>
            <li>Selected in February 2012 to perform Quality Assurance and User Acceptance Testing on internal CRM database based in PeopleSoft (Oracle)  at Apple headquarters in Cupertino, CA</li>
          </ul>
        </div>
      </div>
      {/* <h3>Education</h3>
      <div className="item">
        <h3>Extra Stuff</h3>
      </div> */}
    </section>;
  } else {
    return null;
  }
};

export default Resume;