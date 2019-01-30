import React from 'react';

const Profile = ({resume}) => (
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
          <p className="first">{resume.intro}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Profile;