import "../styles/contact.css";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaRoad, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="cbody">
        <div className="container">
          <h1 className="brand" class="underlined-heading">
            <span></span>Contact Us
          </h1>
          <div className="wrapper animated bounceInLeft">
            <div className="company-info">
              <h3 className="company-info-title underlined-heading">A Creations Farm Stay</h3>
              <ul>
                <li>
                  <FaRoad /> : 6-29/121/P, Narkhuda, Shamsabad, Hyderabad,
                  Telangana 501218
                </li>
                <li>
                  <FaPhone /> : 9393031001 / 9390058561
                </li>
                <li>
                  <FaEnvelope /> : anupkumarheda@gmail.com
                </li>
              </ul>
            </div>
            <div className="contact">
              <form>
                <p>
                  <label>Name</label>
                  <input type="text" name="name" />
                </p>
                <p>
                  <label>Email Address</label>
                  <input type="email" name="email" />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="text" name="phone" />
                </p>
                <p className="full">
                  <label>Message</label>
                  <textarea name="message" rows="5" />
                </p>
                <p className="full">
                  <button>Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
  

      </div>
      <Footer />
    </>
  );
};

export default Contact;
