import React from 'react';
import vehicle from '../assets/images/mechanic.png';
import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <div className="header-container container" id="home">
      <div className="row">
        <Fade left>
          <div className="col l6 m12 s12">
            <h1>Your No.1 distributor of affordable automobile parts</h1>
            <p>
              We connect you to a network of local and global distributors to
              provide parts at an affordable rate.
            </p>

            <div className="actions">
              <a
                href="#contact"
                className="waves-effect waves-light btn-small contact"
              >
                Contact Us
              </a>
              <a
                href="https://www.garagemobility.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="waves-effect waves-light btn-small learn--more "
              >
                Enquire
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
