import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Import the updated CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header__top-wrapper">
        <Link to="/" className="header__logo-link">
          <h1 className="header__title">!NDIA</h1>
        </Link>
      </div>
      <div className="header__lg-nav">
        <ul className="header__ul">
          <li className="header__li"><Link className="header__link" to="/">India</Link></li>
          <li className="header__li"><Link className="header__link" to="/home">Home</Link></li>
          <li className="header__li"><Link className="header__link" to="/heritage-sites">Heritage Sites</Link></li>
          <li className="header__li"><Link className="header__link" to="/travel-with-us">Travel with Us</Link></li>
          <li className="header__li"><Link className="header__link" to="/gallery">Gallery</Link></li>
          <li className="header__li"><Link className="header__link" to="/our-pride">Our Pride</Link></li>
          <li className="header__li"><Link className="header__link" to="/blog">Blog</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
