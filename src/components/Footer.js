import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <h3>A Creations Farm Stay</h3>
          <p>
            Experience the blissful serenity of a farm staycation at Uni Farms.
            Book your unforgettable getaway today.
          </p>
          <p>
            Enjoy nature's beauty, relax in serene accommodations, and make
            cherished memories.
          </p>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <Link to="/about">
            <p>About Us</p>
          </Link>
          <p>Book</p>
          <Link to="/contact">
            <p>Contact Us</p>
          </Link>
          <p>Social Media</p>
        </div>

        <div class="footer__col">
          <h4>Resources</h4>
          <p>Help Center</p>
          <p>Partnerships</p>
        </div>

        <div class="footer__col">
          <h4>Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3051644107827!2d78.40156509280706!3d17.397136722812256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9697426fa711%3A0x804ba10ecbcdd1f5!2sQutb%20Shahi%20Tombs!5e0!3m2!1sen!2sin!4v1688826528457!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2023 A Creations Farm Stay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
