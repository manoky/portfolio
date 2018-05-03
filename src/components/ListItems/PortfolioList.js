import React from 'react';


const PortfolioList = (props) => (
  <li className={props.port.class}>
    <a href={props.port.large} target="_blank"> 
      <div className="overlay"><i className="fa fa-search"></i>
      </div><img src={props.port.small} alt="" />
    </a>
  </li>
); 

export default PortfolioList;