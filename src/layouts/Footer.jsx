import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <Fade bottom cascade>
            <div className="col l6 s12">
              <h5>Garage Mobility</h5>
              <p>
                Garage is Africa’s premier automotive technology company,
                connecting regional and global manufacturers and distributors
                with fleets, retailers and mechanic shops and providing best in
                class software for inventory management, shop management and
                eCommerce
              </p>
            </div>
          </Fade>
          <Fade>
            <div className="col l4 offset-l2 s12">
              <h5>Menu</h5>
              <ul className="footer-links">
                <li>
                  <a href="#!">Products</a>
                </li>
                <li>
                  <a href="#!">About</a>
                </li>
                <li>
                  <a href="#!">Pricing</a>
                </li>
                <li>
                  <a href="#!">Team</a>
                </li>
                <li>
                  <a href="#!">Testimonials</a>
                </li>
                <li>
                  <a href="#!">Contact</a>
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          &copy; 2022 Garage Mobility
          <a className="grey-text text-lighten-4 right" href="#!">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
