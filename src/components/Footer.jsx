import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            style={{
                background: '#ffffff',
                color: '#333333',
                padding: '50px 0 15px',
                borderTop: '2px solid #d4af37',
                boxShadow: '0 -3px 15px rgba(0,0,0,0.05)'
            }}
        >
            <div className="container">

                <div className="row g-4">

                    {/* About */}
                    <div className="col-md-4">
                        <h3 style={{ color: '#b8860b', fontWeight: 'bold' }}>
                            🎂 The Cake Studio
                        </h3>

                        <p className="mt-3">
                            Making every celebration sweeter with
                            delicious cakes, beautiful designs and
                            unforgettable memories.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4">
                        <h4 style={{ color: '#b8860b' }}>
                            Quick Links
                        </h4>

                        <ul className="list-unstyled mt-3">
                            {[
                                ['Home', '/'],
                                ['About', '/about'],
                                ['Products', '/products'],
                                ['Services', '/services'],
                                ['Contact', '/contact']
                            ].map(([name, path]) => (
                                <li className="mb-2" key={name}>
                                    <Link
                                        to={path}
                                        style={{
                                            color: '#333',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        ✦ {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-md-4">
                        <h4 style={{ color: '#b8860b' }}>
                            Contact Us
                        </h4>

                        <p className="mt-3">📍 India</p>
                        <p>📧 thecakestudio@gmail.com</p>
                        <p>📞 +91 9876543210</p>

                        <h5 style={{ color: '#b8860b' }}>
                            Follow Us
                        </h5>

                        <div className="d-flex gap-3">
                            <a href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: '#333' }}>
                                Instagram
                            </a>

                            <a href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: '#333' }}>
                                Facebook
                            </a>
                        </div>
                    </div>

                </div>

                <hr style={{ borderColor: '#d4af37', marginTop: '35px' }} />

                <div className="text-center ">
                    <p className="mb-0">
                       <bold> © 2026 The Cake Studio. All Rights Reserved.</bold>
                        <br />
                        Made with ❤️ for Cake Lovers.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;