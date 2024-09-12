import React from 'react';
import './footer.css'; // Import your CSS file for styling
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
        <div className="footer-image-text">
        <img src={assets.footer} alt='footer' className="footer-image" />
            
            <div className="footer-text">
                <div className="text-column">
                    <h3>Leafy Feast</h3>
                    <p>The new era of technology, we look to the future with certainty and pride for our company.</p>
                </div>
                <div className="text-column">
                    <h3>Pages</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#delivery">Delivery</a></li>
                    </ul>
                </div>
                <div className="text-column">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#cookie">Cookie Policy</a></li>
                    </ul>
                </div>
                <div className="text-column">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Pure Veg Food Order. All rights reserved.</p>
                <p>Crafted with care by [Leafy Feast]</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
