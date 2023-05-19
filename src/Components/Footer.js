import React from 'react';
import '../css/Footer.css'

const Footer = () => {

    function changePath(path) {
        window.location.pathname = path;
    }
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>Find us</h3>
                        <p>1804 Downes Court,</p>
                        <p>London, Ontario</p>
                        <p>N6G 5E8</p>
                    </div>
                    <div className="footer-column">
                        <h3>Contact</h3>
                        <p>Email: info@gsprimo.com</p>
                        <p>Phone: (519) 871-3234</p>
                        <p><a id='linkedin' href='https://www.linkedin.com/company/gsprimo/'>Linkedin</a></p>
                    </div>
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <div className='links'>
                                <div className='left-links'>
                                    <li className='footerLinks'><a href="/">Home</a></li>
                                    <li className='footerLinks'><a href="/aboutus">About Us</a></li>
                                    <li className='footerLinks'><a href="/services">Services</a></li>
                                    <li className='footerLinks'><a href="/randd">R & D</a></li>
                                </div>
                                <div className='right-links'>
                                    <li className='footerLinks'><a href="/projects">Projects</a></li>
                                    <li className='footerLinks'><a href="/career">Career</a></li>
                                    <li className='footerLinks'><a href="/contact">Contact Us</a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <p>Copyright © 2023
                    <a href="https://gsprimo.com/"> GSPrimo Design Inc. </a>
                    All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;
