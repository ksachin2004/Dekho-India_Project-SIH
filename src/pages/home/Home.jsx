import React from "react";
import Header from "../../components/header/Header";
import CTA from "../../components/cta/CTA";
import Heritage from "../../components/heritage/Heritage";
import ShowCase from "../../components/showCase/ShowCase";
import GIA from "../../components/gia/GIA";
import Blogs from "../../components/blogs/Blogs";
import Footer from "../../components/footer/Footer";
import Map from "../../components/Map/Map";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <video className="hero__video" autoPlay loop muted>
        <source src="path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main>
        <section className="hero | section-mg-top container">
          <h2 className="hero__title">
            Explore the <br /> Indian Culture <br /> and Heritage.
          </h2>
          <p className="hero__description">
            India is a country dotted with stunning wildlife diversity, and rich
            traditions. While the Western coast greets you with mouth-watering
            delicacies, the East part invites you to experience its greenery.
          </p>
          <a href="#" className="hero__btn | btn">
            Read More
          </a>
        </section>

        <section className="map | section-mg-top container">
         <Map />
        </section>

        <CTA />
        <Heritage />
        <ShowCase />
        <GIA />
        <Blogs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
