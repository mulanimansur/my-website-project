import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/services.css";

const services = [
    {
        title: "Birthday Cakes",
        description: "Make your birthday special with our delicious and beautiful birthday cakes.",
        icon: "🎂"
    },
    {
        title: "Wedding Cakes",
        description: "Beautiful wedding cakes designed to make your special day memorable.",
        icon: "💍"
    },
    {
        title: "Anniversary Cakes",
        description: "Celebrate your love with our special anniversary cake collection.",
        icon: "❤️"
    },
    {
        title: "Custom Cakes",
        description: "Choose your own design, flavour and size for a personalized cake.",
        icon: "🎨"
    },
    {
        title: "Cupcakes",
        description: "Enjoy soft, creamy and delicious cupcakes for every occasion.",
        icon: "🧁"
    },
    {
        title: "Theme Cakes",
        description: "Creative theme cakes designed according to your favourite ideas.",
        icon: "🎁"
    }
];

const Services = () => {

    const navigate = useNavigate();

    return (
        <section className="services-section">

            <div className="container">

                <div className="services-heading">
                    <h1>Our Services</h1>
                    <p>Making Every Celebration Sweeter!</p>
                </div>

                <div className="row">

                    {services.map((service, index) => (

                        <div className="col-lg-4 col-md-6 mb-4" key={index}>

                            <div className="service-card">

                                <div className="service-icon">
                                    {service.icon}
                                </div>

                                <h3>{service.title}</h3>

                                <p>{service.description}</p>

                                <button
                                    className="service-btn"
                                    onClick={() => navigate("/contact")}
                                >
                                    Explore More
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Services;