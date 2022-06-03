import React from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <section className="about-us container-fluid">
      <div className="container">
        <Fade bottom duration={1000} distance="20px">
          <h2 className="center-align">Join Our Platform</h2>
          <div className="about-content">
            <p>
              Garage is Africa’s premier automotive technology company,
              connecting regional and global manufacturers and distributors with
              fleets, retailers and mechanic shops and providing best in class
              software for inventory management, shop management and eCommerce
            </p>
            <a href="#!" className="button btn--full join">
              Join us now
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
