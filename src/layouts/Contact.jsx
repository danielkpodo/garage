import React from 'react';
import Fade from 'react-reveal/Fade';
import ContactImage from '../assets/images/contact.svg';

const Contact = () => {
  return (
    <div className="contact-us" id="contact">
      <Fade bottom cascade>
        <h2 className="center-align">Contact us</h2>
      </Fade>
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col l4 m12 s12">
              <img
                src={ContactImage}
                alt="Contact us"
                className="responsive-img"
              />
            </div>
          </Fade>
          <Fade right>
            <div className="col l8 m12 s12">
              <h4>Get in touch with with us for further deliberations</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur laborum deleniti eaque totam unde quia esse ipsum
                laudantium sed dicta quo, aliquid neque dolore architecto in nam
                ullam ad excepturi.
              </p>
              <div className="row">
                <form className="submit-form">
                  <div className="input-field col l6 m6 s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label htmlFor="icon_prefix">First Name</label>
                  </div>

                  <div className="input-field col l6 m6 s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label htmlFor="icon_prefix">Last Name</label>
                  </div>

                  <div className="input-field col l6 m6 s12">
                    <i className="material-icons prefix">phone</i>
                    <input
                      id="icon_telephone"
                      type="tel"
                      className="validate"
                    />
                    <label htmlFor="icon_telephone">Telephone</label>
                  </div>
                  <div className="input-field col l6 m6 s12">
                    <i className="material-icons prefix">email</i>
                    <input id="icon_email" type="email" className="validate" />
                    <label htmlFor="icon_email">Email</label>
                  </div>
                  <button
                    className="btn waves-effect waves-light submit-btn"
                    type="button"
                  >
                    Submit
                    <i className="material-icons right">send</i>
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
