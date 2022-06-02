import React from 'react';
import vehicle from '../assets/images/mechanic.png';

const Hero = () => {
  return (
    <div className="header-container container">
      <div className="row">
        <div className="col l6">
          <h1>
            The No.1 platform for connecting fleet owners to maintenance
            services and affordable parts
          </h1>
          <p>
            We connect you to a network of local and global distributors to
            provide parts at an affordable price, improving reliability and
            limiting unplanned maintenance.
          </p>
          <div className="actions">
            <a href="#!" class="button btn--full contact-us">
              Contact Us
            </a>
            <a href="#!" class="button btn--outline">
              Learn more &darr;
            </a>
          </div>
        </div>
        <div className="col l6">
          <a href="#!">
            <img src={vehicle} className="responsive-img" alt="our offer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
