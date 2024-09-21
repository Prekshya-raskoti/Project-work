import React from 'react';
import './footer.css'; // Import your CSS file for styling
import { assets } from '../../assets/assets';
import facebook from '../../assets/facebook_icon.png';
import linkedin from '../../assets/linkedin_icon.png';
import google from '../../assets/google_icon.png';

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
                    <img src={facebook} alt="Facebook" className='facebook' /><b><img src={google} alt="Google" className='google' /></b><b><img src={linkedin} alt="LinkedIn" className='linkedin' /></b>

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
