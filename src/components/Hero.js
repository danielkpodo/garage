import React from 'react';
import vehicle from '../assets/images/mechanic.png';
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <div className="header-container container">
      <div className="row">
        <Fade left>
          <div className="col l6 m12 s12">
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
              <a
                href="#!"
                className="waves-effect waves-light btn-small contact"
              >
                Contact Us
              </a>
              <a
                href="#!"
                target="_blank"
                rel="noopener noreferrer"
                className="waves-effect waves-light btn-small learn--more "
              >
                Learn More
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col l6 m12 s12">
            <a href="#!">
              <img src={vehicle} className="responsive-img" alt="our offer" />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
