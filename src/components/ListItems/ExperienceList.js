import React from 'react';

const ExperienceList = (props) => (
  <div className="col-md-4">
    <article className="experience">
      <header>
        <h3>{props.exp.company}</h3>
        <p>{props.exp.role} / {props.exp.place} / {props.exp.period}</p>
      </header>
      <p>{props.exp.details}.</p>
    </article>
  </div>
);

export default ExperienceList;