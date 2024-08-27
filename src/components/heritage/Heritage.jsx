// Heritage.jsx
import React from "react";
import "./heritage.css";

const Heritage = () => {
  return (
    <section className="heritage section-mg-top container">
      <div className="heritage__head-wrapper">
        <h4 className="cta__title">Locate top heritage sites in India!</h4>
        <p className="cta__description">
          This map depicts the top ten historical sites in India in terms of
          their geographical location. Hover over any point to learn more about
          the place and appreciate the diversity!
        </p>
      </div>
      <div className="heritage__interactive-container">
        <div className="heritage__interactive-item">
          <h5 className="interactive-item-title">Site 1</h5>
          <p className="interactive-item-description">
            Description of Site 1.
          </p>
        </div>
        <div className="heritage__interactive-item">
          <h5 className="interactive-item-title">Site 2</h5>
          <p className="interactive-item-description">
            Description of Site 2.
          </p>
        </div>
        {/* Add more interactive items as needed */}
      </div>
    </section>
  );
};

export default Heritage;
