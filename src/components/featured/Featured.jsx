import React from "react";
import "./Featured.scss";
import img1 from "../../images/IMAGE (9).svg";
import img2 from "../../images/IMAGE (10).svg";

const Featured = () => {
  return (
    <section className="card" id="About">
      <div className="container">
        <p className="card__text">Featured Posts</p>
        <hr className="card__hr" />
        <div className="card__wrapper">
          <div className="card__kub1">
            <h3 className="card__head">The Road Ahead</h3>
            <p className="card__body">
              The road ahead might be paved - it might not be.
            </p>
            <div className="card__flex">
              <div className="card__gap">
                <img src={img1} alt="" />
                <p className="card__name">Mat Vogels</p>
              </div>
              <p className="card__date">September 25, 2015</p>
            </div>
          </div>
          <div className="card__kub2">
            <h3 className="card__head">From Top Down</h3>
            <p className="card__body">
              Once a year, go someplace you’ve never been before..
            </p>
            <div className="card__flex">
              <div className="card__gap">
                <img src={img2} alt="" />
                <p className="card__name">William Wong</p>
              </div>
              <p className="card__date">September 25, 2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
