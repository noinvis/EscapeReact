import React from 'react'
import "./Recent.scss"
import { CARDS } from "../../static/index"

const Recent = () => {
  return (
     <section className="card" id="About">
        <div className="container">
            <p className="card__text">Most Recent</p>
            <hr className="card__hr" />
            <div className="recent__wrapper">
                {CARDS.map((item, inx) => (
                    <div className="recent__card" key={inx} data-aos="fade-up" data-aos-duration="1000">
                        <img src={item.img} className="recent__img" />
                        <div className="recent__area">
                            <h3 className="recent__head">{item.title}</h3>
                            <p className="recent__body">{item.desc}</p>
                        </div>
                        <hr />
                        <div className="recent__flex">
                            <div className="recent__gap">
                            <img src={item.authorImg} />
                            <p className="recent__name">{item.author}</p>
                            </div>
                            <p className="recent__date">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Recent