import React from 'react';
import ExperienceList from './ListItems/ExperienceList';

const Experience = ({ resume }) => (
  <section id="page-experience" className="page-experience">
    <div className="container">
      <header className="section-header">
        <h2 className="section-title"><span>Experience</span></h2>
        <div className="spacer"></div>
        <p className="section-subtitle"></p>
      </header>
      <div className="row">
      { resume.experiences.map(exp => {
        return (<ExperienceList exp={ exp } key={exp} />)
      })}
      </div>
    </div>
  </section>
);

export default Experience;