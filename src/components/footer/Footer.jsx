import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer | section-mg-top container">
      <div className="footer__content">
        <div>
          <h6 className="footer__title">Travel with us</h6>
        </div>
        <div>
          <ul className="footer__ul">
            <li className="footer__li">
              <p className="footer__title">Dekho Apna Desh!</p>
            </li>
            <li className="footer__li">
              <a href="#">Indian Culture</a>
            </li>
            <li className="footer__li">
              <a href="#">Incredible!ndia</a>
            </li>
            <li className="footer__li">
              <a href="#">Ministry of Culture</a>
            </li>
            <li className="footer__li">
              <a href="#">Swachh Bharat</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="footer__ul">
            <li className="footer__li">
              <p className="footer__title">Visit For More</p>
            </li>
            <li className="footer__li">
              <a href="#">My Goverment</a>
            </li>
            <li className="footer__li">
              <a href="#">Digital India</a>
            </li>
            <li className="footer__li">
              <a href="#">Ministry of Tourism</a>
            </li>
            <li className="footer__li">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
