
import React from 'react'

import slide1 from '../assets/poster1.png'
import slide2 from '../assets/poster2.png'
import slide3 from '../assets/poster3.png'
import  '../assets/css/home.css'

const headingcolor ={
    color: "red",
    backgroundColor:"yellow",
    fontsize: "50px"
}

const Home = () => {

    return (
        <>
            {/* Bootstrap Slider */}
            <div id="myCarousel" className="carousel slide"
                data-bs-ride="carousel" data-bs-interval="3000">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="Slide 1" />
                    </div>

                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="Slide 2" />
                    </div>

                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="Slide 3" />
                    </div>

                </div>

                <button className="carousel-control-prev" type="button"
                    data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button"
                    data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>

            {/* About Us */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6">
                            <img src={slide1} className="img-fluid rounded" alt="About Us" />
                        </div>

                        <div className="col-md-6">
                            <h2>About Us</h2>
                            <p>
                                Welcome to our website. We are dedicated to
                                providing quality services and creating the
                                best experience for our customers.
                            </p>

                            <p>
                                Our team believes in quality, creativity and
                                customer satisfaction. We always work hard
                                to achieve our goals.
                            </p>

                            <button className="btn btn-primary">
                                Read More
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Three Cards */}
            <section className="py-5 bg-light">
                <div className="container">

                    <h2 className="text-center mb-4">Our Highlights</h2>

                    <div className="row">

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <img src={slide1} className="card-img-top" alt="Quality" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Quality</h5>
                                    <p className="card-text">
                                        We always focus on providing the best
                                        quality in our work.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <img src={slide2} className="card-img-top" alt="Creativity" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Creativity</h5>
                                    <p className="card-text">
                                        We bring new ideas and creative
                                        solutions to every project.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 shadow">
                                <img src={slide3} className="card-img-top" alt="Support" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Customer Support</h5>
                                    <p className="card-text">
                                        Customer satisfaction is always
                                        our first priority.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <h1 style={{color:"blue", backgroundColor: "black"}}>this is inline css example</h1>
            
            <h1 style={headingcolor}>this is internal example</h1>


            <h1 className="my-text">this is external example</h1>
            </section>

        </>
    )
}

export default Home
