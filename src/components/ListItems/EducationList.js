import React from 'react';

const EducationList = (props) => (
  <div className="col-md-6">
    <article className="education">
      <header>
        <h3>{props.edu.university}</h3>
        <p>{props.edu.degree} - <strong>Graduated:</strong> {props.edu.period}</p>
      </header>
    </article>
  </div>
);

export default EducationList;