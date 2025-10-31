import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <h3>
            <span className="footer-logo">📚</span>
            Book Store
          </h3>
          <p className="brand-description">
            Your one-stop destination for quality books. Discover new worlds,
            explore different perspectives, and find your next favorite read.
          </p>
          <div className="newsletter">
            <h4>Stay Updated</h4>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Browse Books</a>
            </li>
            <li>
              <a href="#">New Releases</a>
            </li>
            <li>
              <a href="#">Best Sellers</a>
            </li>
            <li>
              <a href="#">Special Offers</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Connect With Us</h4>
          <ul className="social-links">
            <li>
              <a href="#" className="social-link">
                <span className="material-icons">facebook</span>
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <span className="material-icons">alternate_email</span>
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <span className="material-icons">photo_camera</span>
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <span className="material-icons">podcasts</span>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            &copy; {new Date().getFullYear()} Book Store. All rights reserved.
          </p>
          <ul className="footer-legal">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
