import React, { useState } from 'react'

import '../assets/css/contact.css'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        alert("Thank you! Your message has been submitted ❤️")

        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })
    }

    return (
        <>

            {/* CONTACT BANNER */}

            <section className="contact-banner">

                <div className="contact-banner-content">

                    <p>THE CAKE STUDIO</p>

                    <h1>Contact Us</h1>

                    <h5>We Would Love To Hear From You ❤️</h5>

                    <span>Home / Contact</span>

                </div>

            </section>


            {/* CONTACT SECTION */}

            <section className="contact-section">

                <div className="container">

                    <div className="contact-heading">

                        <p>GET IN TOUCH</p>

                        <h2>Let's Make Something Sweet Together</h2>

                        <span>
                            Have a question or want to order a cake?
                            Contact us today!
                        </span>

                    </div>


                    <div className="row">

                        {/* CONTACT INFORMATION */}

                        <div className="col-md-5 mb-4">

                            <div className="contact-info">

                                <h3>Contact Information</h3>

                                <p>
                                    We are always ready to make your
                                    celebrations sweeter.
                                </p>


                                <div className="contact-item">

                                    <div className="contact-icon">
                                        📍
                                    </div>

                                    <div>
                                        <h5>Our Address</h5>
                                        <p>Pune, Maharashtra, India</p>
                                    </div>

                                </div>


                                <div className="contact-item">

                                    <div className="contact-icon">
                                        📞
                                    </div>

                                    <div>
                                        <h5>Phone Number</h5>
                                        <p>+91 9876543210</p>
                                    </div>

                                </div>


                                <div className="contact-item">

                                    <div className="contact-icon">
                                        ✉️
                                    </div>

                                    <div>
                                        <h5>Email Address</h5>
                                        <p>thecakestudio@gmail.com</p>
                                    </div>

                                </div>


                                <div className="contact-item">

                                    <div className="contact-icon">
                                        🕒
                                    </div>

                                    <div>
                                        <h5>Opening Hours</h5>
                                        <p>Monday - Sunday</p>
                                        <p>9:00 AM - 10:00 PM</p>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* CONTACT FORM */}

                        <div className="col-md-7 mb-4">

                            <div className="contact-form">

                                <h3>Send Us A Message</h3>

                                <p>
                                    Fill out the form below and
                                    we will get back to you.
                                </p>

                                <form onSubmit={handleSubmit}>

                                    <div className="row">

                                        <div className="col-md-6 mb-3">

                                            <label>Your Name</label>

                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="col-md-6 mb-3">

                                            <label>Email Address</label>

                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="col-md-6 mb-3">

                                            <label>Phone Number</label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Enter phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="col-md-6 mb-3">

                                            <label>Subject</label>

                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Enter subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>


                                        <div className="col-12 mb-3">

                                            <label>Your Message</label>

                                            <textarea
                                                name="message"
                                                rows="5"
                                                placeholder="Write your message..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>

                                        </div>

                                    </div>


                                    <button type="submit" className="contact-btn">
                                        Send Message ❤️
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* GOOGLE MAP */}

            <section className="map-section">

                <div className="container">

                    <div className="contact-heading">

                        <p>FIND US</p>

                        <h2>Visit Our Cake Studio</h2>

                    </div>

                    <iframe
                        title="The Cake Studio Location"
                        src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>

                </div>

            </section>


        </>
    )
}

export default Contact