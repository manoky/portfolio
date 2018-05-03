import React from 'react';
import ContactForm from './ContactForms';

const Contact = ({resume}) => (

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
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;