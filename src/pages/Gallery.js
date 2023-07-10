import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertySlider from "../components/PropertySlider";
import "../styles/PropertySlider.css";

const Gallery = () => {
  return (
    <>
      <Navbar />
      Gallery
      <div className="example-container">
        <PropertySlider />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
