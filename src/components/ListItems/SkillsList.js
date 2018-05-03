import React from 'react';

const SkillsList = (props) => (
  <div className="col-md-2">
    <span className="chart" data-percent={props.skill.percent}>
    <span className="percent"></span>
    <h3>{props.skill.tool}</h3>
    </span>
  </div>
);

export default SkillsList;