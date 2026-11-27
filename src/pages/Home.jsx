import React from 'react'

import slide1 from '../assets/poster1.png'
import slide2 from '../assets/poster2.png'
import slide3 from '../assets/poster3.png'
import slide4 from '../assets/poster4.png'

/* CATEGORY IMAGES */

import birthday from '../assets/birthday.png'
import chocolate from '../assets/chocolate.png'
import special from '../assets/special.png'

import '../assets/css/home.css'

const Home = () => {

    return (
        <>

            {/* HERO SECTION */}

            <section className="hero-section">

                <div id="cakeSlider" className="carousel slide"
                    data-bs-ride="carousel">

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={slide1} className="hero-img" alt="Cake" />
                        </div>

                        <div className="carousel-item">
                            <img src={slide2} className="hero-img" alt="Bakery" />
                        </div>

                        <div className="carousel-item">
                            <img src={slide3} className="hero-img" alt="Dessert" />
                        </div>

                        <div className="carousel-item">
                            <img src={slide4} className="hero-img" alt="Special Cake" />
                        </div>

                    </div>

                    <button className="carousel-control-prev"
                        type="button"
                        data-bs-target="#cakeSlider"
                        data-bs-slide="prev">

                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button className="carousel-control-next"
                        type="button"
                        data-bs-target="#cakeSlider"
                        data-bs-slide="next">

                        <span className="carousel-control-next-icon"></span>
                    </button>

                </div>

            </section>


            {/* CATEGORY SECTION */}

            <section className="category-section">

                <div className="container">

                    <div className="section-heading">

                        <p>OUR COLLECTION</p>

                        <h2>Explore Our Delicious World</h2>

                    </div>

                    <div className="row">

                        {/* BIRTHDAY CAKES */}

                        <div className="col-md-4 mb-4">

                            <div className="category-card">

                                <img src={birthday}
                                    alt="Birthday Cakes" />

                                <h3>Birthday Cakes</h3>

                                <p>Make every birthday memorable.</p>

                                <button className="cake-btn">
                                    Explore Now
                                </button>

                            </div>

                        </div>


                        {/* CHOCOLATE CAKES */}

                        <div className="col-md-4 mb-4">

                            <div className="category-card">

                                <img src={chocolate}
                                    alt="Chocolate Cakes" />

                                <h3>Chocolate Cakes</h3>

                                <p>Rich chocolate in every bite.</p>

                                <button className="cake-btn">
                                    Explore Now
                                </button>

                            </div>

                        </div>


                        {/* SPECIAL CAKES */}

                        <div className="col-md-4 mb-4">

                            <div className="category-card">

                                <img src={special}
                                    alt="Special Cakes" />

                                <h3>Special Cakes</h3>

                                <p>Sweet moments for special days.</p>

                                <button className="cake-btn">
                                    Explore Now
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ABOUT SECTION */}

            <section className="home-about">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-md-6">

                            <img src={slide2}
                                className="about-img"
                                alt="Our Bakery" />

                        </div>

                        <div className="col-md-6">

                            <p className="about-small">OUR STORY</p>

                            <h2>Made With Love, Baked With Passion</h2>

                            <p>
                                At The Cake Studio, we believe every
                                celebration deserves something sweet.
                                Our delicious cakes are prepared with
                                love, fresh ingredients and creativity.
                            </p>

                            <button className="cake-btn">
                                Discover More
                            </button>

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Home