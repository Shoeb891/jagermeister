import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertySlider from "../components/PropertySlider";
import "../styles/PropertySlider.css";
import "../styles/Gallery.css";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="gallery--container">
        <h3 className="gallery--title">Explore Our Gallery</h3>
        <p className="gallery--description">
          Immerse yourself in the captivating beauty of our farm stay through
          our carefully curated photo gallery. Each image captures the essence
          of our serene surroundings, charming accommodations, and the authentic
          farm experience we offer.
        </p>
        <div className="example-container">
          <PropertySlider />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
