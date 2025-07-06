import React from "react";
import "./header.scss";
import logo from "../../images/Escape.svg";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { LINKS } from "../../static/index";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo animation-left">
            <img src={logo} alt="" />
          </div>
          <ul className="navbar__collection">
            {LINKS.map((item, inx) => (
              <li key={inx} className="navbar__item animation-top">
                <a href="#" className="navbar__link">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="img-flex">
            <FiShoppingCart />
            <IoSearchOutline />
          </div>
        </nav>
        <div className="hero animation-middle">
          <h2 className="hero__main">Let's do it together.</h2>
          <p className="hero__text">
            We travel the world in search of stories. Come along for the ride.
          </p>
          <button className="hero__btn">View Latest Posts</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
