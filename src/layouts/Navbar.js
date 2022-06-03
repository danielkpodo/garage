import React from 'react';
import navLinks from '../utils/menu-links';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import M from 'materialize-css';

const NavigationMenu = () => {
  React.useEffect(() => {
    /** Initialize sidemenu */
    var elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250,
    });
  }, []);

  const menuLinks = navLinks.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.path}>{item.text}</a>
        <div className="divider hide-on-large-only"></div>
      </li>
    );
  });
  return (
    <>
      <header>
        <nav className="main-menu">
          <div className="nav-wrapper">
            <Logo />
            <a
              href="#!"
              data-target="mobile-demo"
              className="sidenav-trigger"
              rel="noopener noreferrer"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {menuLinks}
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          {menuLinks}
        </ul>
        <Hero />
      </header>
    </>
  );
};

export default NavigationMenu;
