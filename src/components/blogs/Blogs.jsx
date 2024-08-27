import React from "react";
import "./blogs.css";

const Blogs = () => {
  return (
    <section className="blogs | section-mg-top container">
      <div>
        <h4 className="blogs__h4 cta__title">Blogs And Articles</h4>
      </div>
      <div className="blogs__card-container">
        <div className="blogs__card">
          <div className="blogs__img-wrapper">
            <img className="blogs__img" src="./b-1.jpg" alt="Cultural India: Indian Food" />
          </div>
          <div className="blogs__content">
            <h5 className="blogs__h5">Cultural India : Indian Food</h5>
            <p className="blogs__description">
              The traditional food of India has been widely appreciated for its
              fabulous use of herbs and spices. Indian cuisine is known for its
              large assortment of dishes.
            </p>
          </div>
        </div>
        <div className="blogs__card">
          <div className="blogs__img-wrapper">
            <img className="blogs__img" src="./b-2.jpg" alt="The Unity of India in Diversity: Religions" />
          </div>
          <div className="blogs__content">
            <h5 className="blogs__h5">
              The Unity of India in Diversity : Religions
            </h5>
            <p className="blogs__description">
              Diversity characterizes India. The diverse characters of India are
              strongly unified and perfectly assimilated to emerge as a one
              single nation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
