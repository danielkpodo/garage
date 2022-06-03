import React from 'react';

import ContactImage from '../assets/images/contact.svg';

const Contact = () => {
  return (
    <div className="contact-us">
      <h2 className="center-align">Contact us</h2>
      <div className="container">
        <div className="row">
          <div className="col l4 m12 s12">
            <img
              src={ContactImage}
              alt="Contact us"
              className="responsive-img"
            />
          </div>
          <div className="col l8 m12 s12">
            <h4>Get in touch with with us for further deliberations</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur laborum deleniti eaque totam unde quia esse ipsum
              laudantium sed dicta quo, aliquid neque dolore architecto in nam
              ullam ad excepturi.
            </p>
            <div class="row">
              <form className="submit-form">
                <div class="input-field col l6 m6 s12">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text" class="validate" />
                  <label for="icon_prefix">First Name</label>
                </div>

                <div class="input-field col l6 m6 s12">
                  <i class="material-icons prefix">account_circle</i>
                  <input id="icon_prefix" type="text" class="validate" />
                  <label for="icon_prefix">Last Name</label>
                </div>

                <div class="input-field col l6 m6 s12">
                  <i class="material-icons prefix">phone</i>
                  <input id="icon_telephone" type="tel" class="validate" />
                  <label for="icon_telephone">Telephone</label>
                </div>
                <div class="input-field col l6 m6 s12">
                  <i class="material-icons prefix">email</i>
                  <input id="icon_email" type="email" class="validate" />
                  <label for="icon_email">Email</label>
                </div>
                <a
                  href="#!"
                  className="button btn--full submit-btn"
                  type="button"
                  name="action"
                >
                  Submit
                  <i class="material-icons right">send</i>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
