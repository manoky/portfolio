import React from 'react';
import SkillsList from './ListItems/SkillsList';


const Skills = ({ resume }) => (
  <section id="page-skills" className="page-skills">
    <div className="container">
      <header className="section-header">
        <h2 className="section-title"><span>Skills</span></h2>
        <div className="spacer"></div>
        <p className="section-subtitle"></p>
      </header>
      <div className="row">
      { resume.skills.map(skill => {
        return (<SkillsList skill={ skill } key={skill} />)
      })}
      </div>
    </div>
  </section>
); 

export default Skills;

