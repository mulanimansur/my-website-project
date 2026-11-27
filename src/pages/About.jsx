
import React from "react";
import "../assets/css/about.css";
import cake1 from "../assets/about-cake.jpg";

const About = () => {
  return (
    <>
      {/* About Hero Section */}
      <section className="about-hero">
        
             <img
              src={cake1}
              alt="Delicious Cake"
              className="about-img"
            />
          <h1>About The Cake Studio</h1>
          <p>Making Every Celebration Sweeter!</p>
      
      </section>

      {/* About Us Section */}
      <section className="about-section container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={cake1}
              alt="Delicious Cake"
              className="about-img"
            />
          </div>

          <div className="col-md-6">
            <h2>Welcome To The Cake Studio</h2>
            <p>
              Welcome to The Cake Studio, where every cake is made with love,
              creativity and the finest ingredients. We believe every
              celebration deserves a special cake.
            </p>
            <p>
              From birthdays to anniversaries, we create delicious cakes
              that make your special moments unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="container text-center">
          <h2>Our Story</h2>
          <p>
            The Cake Studio started with a simple passion for baking and
            creating happiness. Our journey is all about spreading smiles
            through beautiful and delicious cakes.
          </p>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="mission-section container">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="mission-card">
              <h2>Our Mission</h2>
              <p>
                Our mission is to provide fresh, delicious and high-quality
                cakes that make every celebration memorable.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mission-card">
              <h2>Our Vision</h2>
              <p>
                Our vision is to become a trusted cake brand known for
                creativity, quality and customer happiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="choose-section">
        <div className="container text-center">
          <h2>Why Choose Us?</h2>

          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="choose-card">
                <h4>Fresh Ingredients</h4>
                <p>We use fresh and quality ingredients.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="choose-card">
                <h4>Beautiful Designs</h4>
                <p>Every cake is designed with creativity.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="choose-card">
                <h4>Customer Happiness</h4>
                <p>Your happiness is our biggest achievement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;