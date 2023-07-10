import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <h3 class="title">Universal Farms</h3>
        <p>
          Experience the blissful serenity of a farm staycation at Uni Farms.
          Book your unforgettable getaway today.
        </p>
        <p>
          Enjoy nature's beauty, relax in serene accommodations, and make
          cherished memories.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
