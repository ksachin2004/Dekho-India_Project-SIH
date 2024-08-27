import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  useEffect(() => {
    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-type');
      let period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
  }, []);

  class TxtType {
    constructor(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.isDeleting = false;
      this.tick();
    }

    tick() {
      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let delta = 300 - Math.random() * 100; // Increased base delay to slow down typing

      if (this.isDeleting) {
        delta /= 2; // Deleting speed is still faster than typing
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period; // Pause before starting to delete
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500; // Pause before starting the next phrase
      }

      setTimeout(() => this.tick(), delta);
    }
  }

  return (
    <header className="header">
      <div className="header__top-wrapper">
        <Link to="/" className="header__logo-link">
          <h1 className="header__title">!NDIA</h1>
        </Link>
      </div>
      <h1 className="typewrite" data-period="2000" data-type='[ "Incredible !ndia", "Dekho Apna Desh!", "Explore the Indian Culture and Heritage." ]'>
        <span className="wrap">Explore the Indian Culture and Heritage.</span>
      </h1>
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
