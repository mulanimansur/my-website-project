import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: "#ffffff" }}>

                <div className="container">

                    {/* Brand Logo */}
                    <NavLink to="/" className="navbar-brand  fw-bold fs-3">
                      <impotant> 🎂 The Cake Studio</impotant>  
                    </NavLink>

                    {/* Mobile Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMenu"
                        aria-controls="navbarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse"
                        id="navbarMenu">

                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/products" className="nav-link">
                                    Products
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link">
                                    Services
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    Contact
                                </NavLink>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header