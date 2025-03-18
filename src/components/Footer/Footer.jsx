import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Elegant Jewelry offers timeless pieces crafted with precision and passion. Discover our story and commitment to quality.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="./index.html">Jewellery</a></li>
                    <li><a href="./product.html">Offers</a></li>
                    <li><a href="./aboutus">About Us</a></li>
                    <li><a href="./contect.html">Ambassador</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact Us</h3>
                <p>Email: info@elegantjewelry.com</p>
                <p>Phone: +91 123 456 7890</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Elegant Jewelry. All rights reserved.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer