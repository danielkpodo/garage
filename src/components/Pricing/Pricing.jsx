import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsXCircle } from 'react-icons/bs';

const Pricing = () => {
  return (
    <div className="pricing">
      <h2>Our Pricing</h2>
      <div className="container">
        <div className="row">
          <div className="col l6 m6 s12 pricing-margin-fix">
            <div className="pricing-table z-depth-4">
              <div className="table-header">
                <h4>Starter</h4>
              </div>
              <div className="table-content">
                <h3 className="center-align">$89.00</h3>
                <ul className="items">
                  <li>
                    <BsCheckCircleFill className="icon-mark" /> Get Quote
                  </li>
                  <li>
                    <BsCheckCircleFill className="icon-mark" /> Watch
                    Diagnostics{' '}
                  </li>
                  <li>
                    <BsXCircle className="icon-mark" />
                    Lease a car
                  </li>
                  <li>
                    <BsCheckCircleFill className="icon-mark" /> Proceed with
                    cation
                  </li>
                  <li>
                    <BsXCircle className="icon-mark" /> Insurance Cover
                  </li>
                </ul>
              </div>
              <div className="table-footer">
                <button className="btn btn-large  waves-effect waves-light btn-signup">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="col l6 m6 s12">
            <div className="pricing-table z-depth-4">
              <div className="table-header">
                <h4>Complete</h4>
              </div>
              <div className="table-content">
                <h3 className="center-align">$89.00</h3>
                <ul className="items">
                  <li>
                    <BsCheckCircleFill className="icon-mark" /> Get Quote
                  </li>
                  <li>
                    <BsCheckCircleFill className="icon-mark" /> Watch
                    Diagnostics{' '}
                  </li>
                  <li>
                    <BsCheckCircleFill className="icon-mark" /> Lease a car
                  </li>
                  <li>
                    <BsCheckCircleFill className="icon-mark" /> Proceed with
                    cation
                  </li>
                  <li>
                    <BsCheckCircleFill className="icon-mark" /> Insurance Cover
                  </li>
                </ul>
              </div>
              <div className="table-footer">
                <button className="btn btn-large  waves-effect waves-light btn-signup">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
