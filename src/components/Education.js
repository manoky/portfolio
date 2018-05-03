import React from 'react';
import EducationList from './ListItems/EducationList';

const Education = ({ resume }) => (
  <section id="page-education" className="page-education">
    <div className="container">
      <header className="section-header">
        <h2 className="section-title"><span>Education</span></h2>
        <div className="spacer"></div>
        <p className="section-subtitle"></p>
      </header>
      <div className="row">
        { resume.education.map(edu => {
          return (<EducationList edu={ edu } key={edu} />)
        })}
      </div>
    </div>
  </section>
);

export default Education;