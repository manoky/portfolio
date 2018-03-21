import React, { Component } from 'react';
import './App.css';
import resume from './resume.json'
import Experience from './Experience'
import Education from './Education'
import Skill from './Skill'
import Portfolio from './Portfolio'



class App extends Component {
  renderExperience(){
    let resultsArray =[];
    resume.experiences.map((item, i)=> {
      resultsArray.push(<Experience item={item} key={i} />);
    });
    return resultsArray;
  }
  /*  renderExperience end */


  renderEducation(){
    let resultsArray =[];
    resume.education.map((item, i)=> {
      resultsArray.push(<Education item={item} key={i} />);
    });
    return resultsArray;
  }
  /*  renderEducation end */

  renderSkill(){
    let resultsArray =[];
    resume.skills.map((item, i)=> {
      resultsArray.push(<Skill item={item} key={i} />);
    });
    return resultsArray;
  }
  /*  renderSkill end */

  renderPortfolio(){
    let resultsArray =[];
    resume.portfolio.map((item, i)=> {
      resultsArray.push(<Portfolio item={item} key={i} />);
    });
    return resultsArray;
  }
  /*  renderSkill end */



  render() {
    return (
  <div>
    {/*  profile begins */}
      <section id="page-profile" className="page-profile">
          <div className="container">
              <header className="section-header">
                  <h2 className="section-title">Personal Profile</h2>
                  <div className="spacer"></div>
                  <p className="section-subtitle"></p>
              </header>
              <div className="row">
                  <div className="col-md-3">
                      <div className="profile"><img src="img/profile.png" alt="myself sitting" />
                      </div>
                  </div>
                  <div className="col-md-9">
                      <p>{resume.intro}</p>
                      <p>{resume.intro2}</p>
                  </div>
              </div>
          </div>
      </section>
      {/*  profile ends */}


      {/*  skills begins */}
      <section id="page-skills" className="page-skills">
          <div className="container">

              <header className="section-header">
                  <h2 className="section-title"><span>Skills</span></h2>
                  <div className="spacer"></div>
                  <p className="section-subtitle"></p>
              </header>
              <div className="row">
                {this.renderSkill()}
              </div>
          </div>
      </section>
      {/*  skills ends */}


      {/*  education begins */}
      <section id="page-education" className="page-education">
          <div className="container">
              <header className="section-header">
                  <h2 className="section-title"><span>Education</span></h2>
                  <div className="spacer"></div>
                  <p className="section-subtitle"></p>
              </header>
              <div className="row">
                {this.renderEducation()}
              </div>
          </div>
      </section>
      {/*  education ends */}

      {/*  experience begins */}
      <section id="page-experience" className="page-experience">
          <div className="container">
              <header className="section-header">
                  <h2 className="section-title"><span>Experience</span></h2>
                  <div className="spacer"></div>
                  <p className="section-subtitle"></p>
              </header>
              <div className="row">
                {this.renderExperience()}
              </div>
          </div>
      </section>
      {/*  experience ends */}


      {/*  portfolio begins */}
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
                          <li className="active filter"><a href="javascript:void(0)" data-filter="*">All</a>
                          </li>
                          <li className="filter"><a href="javascript:void(0)" data-filter=".design">Design</a>
                          </li>
                          <li className="filter"><a href="javascript:void(0)" data-filter=".react">ReactJS</a>
                          </li>
                          <li className="filter"><a href="javascript:void(0)" data-filter=".rails">Ruby On Rails</a>
                          </li>
                      </ul>
                  </div>

                  <div>
                      <ul id="grid" className="grid-wrapper">
                      {this.renderPortfolio()}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      <section id="page-contact" className="page-contact">
          <div className="container">
              <header className="section-header">
                  <h2 className="section-title"><span>Contact</span></h2>
                  <div className="spacer"></div>
                  <p className="section-subtitle"></p>
              </header>
              <div className="row">
                  <div className="col-sm-5 contact-info">
                      <h3>Contact Info</h3>
                      <p><i className="fa fa-map-marker"></i> {resume.address} </p>
                      <p><i className="fa fa-phone"></i> (555) 123-4567</p>
                      <p><i className="fa fa-envelope-o"></i> {resume.email}</p>
                  </div>

                  <div className="col-sm-7">
                      <h3>Get in Touch</h3>
                      {/* Configure the contact form by adding your email address on mail/contact_me.php line 17 */}
                      <form className="form-horizontal" id="contactForm" novalidate>
                          <div className="control-group">
                              <label className="control-label" for="name">Name</label>
                              <div className="controls">
                                  <input type="text" name="name" id="name" placeholder="Your name" className="form-control input-lg"  required data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                              </div>
                          </div>
                          <div className="control-group">
                              <label className="control-label" for="email">Email Address</label>
                              <div className="controls">
                                  <input type="email" name="email" id="email" placeholder="Your email address" className="form-control input-lg"  required data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                              </div>
                          </div>
                          <div className="control-group">
                              <label className="control-label" for="message">Message</label>
                              <div className="controls">
                                  <textarea name="message" id="message" rows="8" className="form-control input-lg" required data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                              </div>
                          </div>
                          <div className="form-actions">
                          <div id="success"></div>
                              <button type="submit" className="btn btn-default btn-lg btn-block">Submit Message</button>
                          </div>
                      </form>
                      {/* End contact-form */}
                  </div>
              </div>
              {/* End row! */}

          </div>
      </section>
    </div>
    );
  }
}

export default App;
