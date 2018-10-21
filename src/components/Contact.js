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
        <div className="main-contact">
          <div id="contacts">
            <h3>Get in Touch</h3>
            <p><i className="fa fa-envelope-o"></i> {resume.email}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;