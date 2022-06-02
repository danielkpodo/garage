import React from 'react';
import logo from '../assets/images/brand-identity.png';

const Logo = () => (
  <a href="/" className="brand-logo">
    <img
      src={logo}
      alt="Brand identity"
      className="logo"
      style={{ height: '55px', padding: '4px 0' }}
    />
  </a>
);

export default Logo;
