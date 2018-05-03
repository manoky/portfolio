import React from 'react';

const ContactForm = () => (
  <form className="form-horizontal" id="contactForm" novalidate>
    <div className="control-group">
      <label className="control-label" for="name">Name</label>
      <div className="controls">
        <input type="text" name="name" id="name"
          placeholder="Your name" className="form-control input-lg" 
          required data-validation-required-message="Please enter your name."
        />
        <p className="help-block text-danger"></p>
      </div>
    </div>
    <div className="control-group">
      <label className="control-label" for="email">Email Address</label>
      <div className="controls">
        <input type="email" name="email" id="email" placeholder="Your email address"
          className="form-control input-lg" 
          required data-validation-required-message="Please enter your email address." 
        />
        <p className="help-block text-danger"></p>
      </div>
    </div>
    <div className="control-group">
      <label className="control-label" for="message">Message</label>
      <div className="controls">
        <textarea name="message" id="message" rows="8" className="form-control input-lg"
          required data-validation-required-message="Please enter a message.">
        </textarea>
        <p className="help-block text-danger"></p>
      </div>
    </div>
    <div className="form-actions">
    <div id="success"></div>
      <button type="submit" className="btn btn-default btn-lg btn-block">Submit Message</button>
    </div>
  </form>
);

export default ContactForm;