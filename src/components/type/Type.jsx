import React from "react";
import "./Type.scss";
import { TYPES } from "../../static/index";

const Type = () => {
  return (
    <section className="types" id="Categories">
      <div className="container">
        <ul className="types__collection">
          {TYPES.map((item, inx) => (
            <li key={inx} className="types__item animation-top">
              <a href="#">
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Type;
