import React, { useState } from 'react'

import '../assets/css/products.css'

/* IMPORT CAKE IMAGES */

import cake1 from '../assets/images1.jpg'
import cake2 from '../assets/images2.jpg'
import cake3 from '../assets/images3.jpg'
import cake4 from '../assets/images4.jpg'
import cake5 from '../assets/images5.jpg'
import cake6 from '../assets/images6.jpg'
import cake7 from '../assets/images7.jpg'
import cake8 from '../assets/images8.jpg'
import cake9 from '../assets/images9.jpg'
import cake10 from '../assets/images10.jpg'
import cake11 from '../assets/images11.jpg'
import cake12 from '../assets/images12.jpg'


const Products = () => {

    const [cart, setCart] = useState([])

    const cakes = [

        {
            id: 1,
            name: "Chocolate Cake",
            price: 550,
            image: cake1
        },

        {
            id: 2,
            name: "Black Forest Cake",
            price: 650,
            image: cake2
        },

        {
            id: 3,
            name: "White Forest Cake",
            price: 600,
            image: cake3
        },

        {
            id: 4,
            name: "Birthday Cake",
            price: 750,
            image: cake4
        },

        {
            id: 5,
            name: "Pineapple Cake",
            price: 500,
            image: cake5
        },

        {
            id: 6,
            name: "Red Velvet Cake",
            price: 700,
            image: cake6
        },

        {
            id: 7,
            name: "Strawberry Cake",
            price: 650,
            image: cake7
        },

        {
            id: 8,
            name: "Vanilla Cream Cake",
            price: 450,
            image: cake8
        },

        {
            id: 9,
            name: "Blueberry Cake",
            price: 750,
            image: cake9
        },

        {
            id: 10,
            name: "Butterscotch Cake",
            price: 600,
            image: cake10
        },

        {
            id: 11,
            name: "Oreo Cake",
            price: 700,
            image: cake11
        },

        {
            id: 12,
            name: "KitKat Cake",
            price: 800,
            image: cake12
        }

    ]


    const addToCart = (cake) => {

        setCart([...cart, cake])

        alert(cake.name + " added to cart!")

    }


    return (

        <>

            {/* PRODUCTS BANNER */}

            <section className="products-banner">

                <div className="products-banner-content">

                    <p>THE CAKE STUDIO</p>

                    <h1>Our Delicious Cakes</h1>

                    <h5>
                        Freshly Baked Happiness For Every Celebration ❤️
                    </h5>

                </div>

            </section>


            {/* PRODUCTS SECTION */}

            <section className="products-section">

                <div className="container">

                    <div className="products-heading">

                        <p>OUR COLLECTION</p>

                        <h2>Discover Our Delicious Cakes</h2>

                        <span>
                            Made with love, baked with passion.
                        </span>

                    </div>


                    {/* CART COUNTER */}

                    <div className="cart-info">

                        🛒 Your Cart: <strong>{cart.length}</strong> Items

                    </div>


                    {/* CAKE CARDS */}

                    <div className="row">

                        {cakes.map((cake) => (

                            <div
                                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                                key={cake.id}
                            >

                                <div className="product-card">

                                    <div className="product-image">

                                        <img
                                            src={cake.image}
                                            alt={cake.name}
                                        />

                                        <span className="product-badge">
                                            Fresh
                                        </span>

                                    </div>


                                    <div className="product-details">

                                        <h3>{cake.name}</h3>

                                        <div className="product-rating">
                                            ⭐⭐⭐⭐⭐
                                        </div>

                                        <h4>₹{cake.price}</h4>

                                        <button
                                            className="add-cart-btn"
                                            onClick={() => addToCart(cake)}
                                        >
                                            Add To Cart 🛒
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </>

    )

}

export default Products