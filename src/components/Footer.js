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
          <Link to="/contact" className="footer__link">
            Book
          </Link>
          <Link to="/contact" className="footer__link">
            Contact Us
          </Link>
          <Link to="/gallery" className="footer__link">
            Gallery
          </Link>
          <Link to="/testimonials" className="footer__link">
            Testimonials
          </Link>
          
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Social Media</h4>
          <Link to="https://api.whatsapp.com/send?phone=9393031001" target="_blank" className="footer__link">
            Whatsapp
          </Link>
          <Link to="https://www.instagram.com/a_creation_farm_stay/" target="_blank" className="footer__link">
            Instagram
          </Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.102973825073!2d78.3255059!3d17.262252399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbf271a7aa60b%3A0x1fee920eb7355b98!2sA%20Creations%20Farm%20Stay!5e0!3m2!1sen!2sin!4v1689019312797!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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
