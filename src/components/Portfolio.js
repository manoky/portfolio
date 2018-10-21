import React from 'react';
import PortfolioList from './ListItems/PortfolioList';


const Portfolio = ({resume}) => (
  <section id="page-portfolio" className="page-portfolio">
    <div className="container">
      <div className="row">
        <header className="section-header">
          <h2 className="section-title"><span>Portfolio</span></h2>
          <div className="spacer"></div>
          <p className="section-subtitle"></p>
        </header>

        <div id="grid-controls-wrapper">
          <ul className="nav nav-pills center-pills grid-controls">
            <li className="active filter">
              <a href="javascript:void(0)" data-filter="*">All</a>
            </li>
            <li className="filter">
              <a href="javascript:void(0)" data-filter=".react">ReactJS</a>
            </li>
            <li className="filter">
              <a href="javascript:void(0)" data-filter=".rails">Ruby On Rails</a>
            </li>
          </ul>
        </div>

        <div>
          <ul id="grid" className="grid-wrapper">
          { resume.portfolio.map(port => {
            return (<PortfolioList port={ port } />)
          })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
 
export default Portfolio;
