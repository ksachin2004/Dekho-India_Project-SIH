import React from "react";
import "./show-case.css";

const ShowCase = () => {
  return (
    <section className="show | section-mg-top container">
      {/* Button Container */}
      <div className="show__btn-container">
        <button className="show__btn | btn">All</button>
        <button className="show__btn | btn">Foods and Culture</button>
        <button className="show__btn | btn">Heritage Sites</button>
        <button className="show__btn | btn">Paradise</button>
      </div>

      {/* Image Container */}
      <div className="show__img-container">
        {/* Image Item */}
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-1.jpg" alt="Image 1" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-2.jpg" alt="Image 2" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-3.jpg" alt="Image 3" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-4.jpg" alt="Image 4" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-5.jpg" alt="Image 5" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-6.jpg" alt="Image 6" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-7.jpg" alt="Image 7" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-8.jpg" alt="Image 8" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-9.jpg" alt="Image 9" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-10.jpg" alt="Image 10" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-11.jpg" alt="Image 11" />
        </div>
        <div className="show__img-wrapper">
          <img className="show__img" src="/d-12.jpg" alt="Image 12" />
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
