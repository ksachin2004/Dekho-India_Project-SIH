import React from "react";
import "./gia.css";

const GIA = () => {
  return (
    <section className="gia | section-mg-top container">
      <div className="gia__head-wrapper">
        <h5 className="gia__title">Great Indian Cities</h5>
        <p className="gia__description">
          Explore the vibrant culture, history, and modernity of India's most iconic cities.
        </p>
      </div>
      <div className="gia__img-wrapper">
        <figure className="gia__figure">
          <img className="gia__img" src="./mumbai.jpg" alt="Mumbai" />
          <figcaption className="gia__caption">
            <h6 className="gia__title">Mumbai</h6>
            <p className="gia__description">The Financial Capital of India</p>
          </figcaption>
        </figure>
        <figure className="gia__figure">
          <img className="gia__img" src="./delhi.jpg" alt="Delhi" />
          <figcaption className="gia__caption">
            <h6 className="gia__title">Delhi</h6>
            <p className="gia__description">The Capital of India</p>
          </figcaption>
        </figure>
        <figure className="gia__figure">
          <img className="gia__img" src="./banglore.jpg" alt="Bangalore" />
          <figcaption className="gia__caption">
            <h6 className="gia__title">Bangalore</h6>
            <p className="gia__description">Silicon Valley of India</p>
          </figcaption>
        </figure>
        <figure className="gia__figure">
          <img className="gia__img" src="./mumbai.jpg" alt="Mumbai" />
          <figcaption className="gia__caption">
            <h6 className="gia__title">Chennai</h6>
            <p className="gia__description">The City of Temples</p>
          </figcaption>
        </figure>
        <figure className="gia__figure">
          <img className="gia__img" src="./lucknow.jpg" alt="Lucknow" />
          <figcaption className="gia__caption">
            <h6 className="gia__title">Lucknow</h6>
            <p className="gia__description">The City of Nawabs</p>
          </figcaption>
        </figure>
        <figure className="gia__figure">
          <img className="gia__img" src="./hyderabad.jpg" alt="Hyderabad" />
          <figcaption className="gia__caption">
            <h6 className="gia__title">Hyderabad</h6>
            <p className="gia__description">The City of Pearls</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default GIA;
