import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import logo from '../../constants/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#menu">Analytics</a></li>
        <li className="p__opensans"><a href="#awards">NDR</a></li>
        <li className="p__opensans"><a href="#contact">NMRS</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Log Out</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineCloseSquare fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Analytics</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>NDR</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>NMRS</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;