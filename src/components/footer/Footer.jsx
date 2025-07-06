import React from "react";
import "./Footer.scss";
import { FTRLINKS } from "../../static/index";
import escapeimg from "../../images/Escape.svg";

const Footer = () => {
  return (
    <footer className="footer" id="Contact">
      <div className="container">
        <p className="card__text">Stay in Touch</p>
        <hr className="card__hr" />
        <div className="footer__main">
          <input
            type="text"
            placeholder="Enter your email address"
            className="footer__inp"
          />
          <button className="footer__btn">Submit</button>
        </div>
      </div>
      <div className="footer__end">
        <div className="container">
          <nav className="navbar">
            <div className="navbar__logo">
              <img src={escapeimg} alt="" />
            </div>
            <ul className="navbar__collection">
              {FTRLINKS.map((item, inx) => (
                <li key={inx} className="navbar__item">
                  <a href="#" className="navbar__link">
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
