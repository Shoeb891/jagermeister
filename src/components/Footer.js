import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <Link to="/about" className="footer__link">
            About Us
          </Link>
          <Link to="/booking" className="footer__link">
            Book
          </Link>
          <Link to="/contact" className="footer__link">
            Contact Us
          </Link>
          <Link to="/social" className="footer__link">
            Social Media
          </Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Resources</h4>
          <Link to="/help" className="footer__link">
            Help Center
          </Link>
          <Link to="/partnerships" className="footer__link">
            Partnerships
          </Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Location</h4>
          <iframe
            title="Farm Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3051644107827!2d78.40156509280706!3d17.397136722812256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9697426fa711%3A0x804ba10ecbcdd1f5!2sQutb%20Shahi%20Tombs!5e0!3m2!1sen!2sin!4v1688826528457!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="footer__map"
          ></iframe>
        </div>
      </div>
      <div className="footer__bar">
        &copy; 2023 A Creations Farm Stay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
