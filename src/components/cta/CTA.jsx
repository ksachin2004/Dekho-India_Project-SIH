import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <section className="cta | section-mg-top container">
      <div className="cta__head-wrapper">
        <h3 className="cta__title">Where Science Meets the Sacred!</h3>
        <p className="cta__description">
          Witness the grand architecture! How about taking your kids on an
          exploration of India's heritage this holiday season?
        </p>
      </div>
      <div className="cta__img-container">
        <figure className="cta__img-wrapper">
          <img className="cta__img" src="./modhera.jpg" alt="Modhera Sun Temple" />
          <figcaption className="cta__caption">Modhera Sun Temple</figcaption>
        </figure>
        <figure className="cta__img-wrapper">
          <img className="cta__img" src="./adi.jpg" alt="Adi Annamalai Temple" />
          <figcaption className="cta__caption">Adi Annamalai Temple</figcaption>
        </figure>
        <figure className="cta__img-wrapper">
          <img className="cta__img" src="CSMT.jpg" alt="Chhatrapati Shivaji Maharaj Terminus" />
          <figcaption className="cta__caption">CSMT</figcaption>
        </figure>
        <figure className="cta__img-wrapper">
          <img className="cta__img" src="ganga-arti.jpg" alt="Ganga Aarti" />
          <figcaption className="cta__caption">Ganga Aarti</figcaption>
        </figure>
        <figure className="cta__img-wrapper">
          <img className="cta__img" src="ghats.jpg" alt="Western Ghats" />
          <figcaption className="cta__caption">Western Ghats</figcaption>
        </figure>
        <figure className="cta__img-wrapper">
          <img className="cta__img" src="red-fort.jpg" alt="Red Fort" />
          <figcaption className="cta__caption">Red Fort</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default CTA;
