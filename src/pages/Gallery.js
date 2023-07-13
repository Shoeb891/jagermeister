import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertySlider from "../components/PropertySlider";

import "../styles/PropertySlider.css";
import "../styles/Gallery.css";
import Whatsapp from "../components/Whatsapp";

const Gallery = () => {
  const interiorImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8051.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8052.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8054.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8055.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8056.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8058.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8059.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8061.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8071.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8072.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8074.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8078.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8080.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8082.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8083.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8084.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8085.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8088.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8115.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8116.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8119.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8124.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8146.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8147.jpg?raw=true",
  ];

  const kitchenImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/kitchen/IMG_8053.jpg?raw=true",
  ];

  const barCounterImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/bar-counter/IMG_8047.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/bar-counter/IMG_8076.jpg?raw=true",
  ];

  const lawnImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/lawn/IMG_8076.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/lawn/IMG_8126.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/lawn/IMG_8132.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/lawn/IMG_8136.jpg?raw=true",
  ];

  const poolImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/pool/IMG_8048.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/pool/IMG_8050.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/pool/IMG_8075.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/pool/IMG_8076.jpg?raw=true",
  ];

  return (
    <>
      <Navbar />
      <Whatsapp />
      <div className="gallery--container">
        <h3 className="gallery--title">Explore Our Gallery</h3>
        <p className="gallery--description">
          Immerse yourself in the captivating beauty of our farm stay through
          our carefully curated photo gallery. Each image captures the essence
          of our serene surroundings, charming accommodations, and the authentic
          farm experience we offer.
        </p>
        <div className="container--text">
          <h3 className="container--title">Interior</h3>
          <p className="container--description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit diam
            fringilla, taciti metus aenean nostra nisi tellus hac placerat.
          </p>
        </div>
        <div className="interiorImages-container">
          <PropertySlider images={interiorImages} />
        </div>
        <div className="container--text">
          <h3 className="container--title">Bar Counter</h3>
          <p className="container--description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit diam
            fringilla, taciti metus aenean nostra nisi tellus hac placerat.
          </p>
        </div>
        <div className="barCounterImages-container">
          <PropertySlider images={barCounterImages} />
        </div>
        <div className="container--text">
          <h3 className="container--title">Kitchen</h3>
          <p className="container--description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit diam
            fringilla, taciti metus aenean nostra nisi tellus hac placerat.
          </p>
        </div>
        <div className="kitchenImages-container">
          <PropertySlider images={kitchenImages} />
        </div>
        <div className="container--text">
          <h3 className="container--title">Lawn</h3>
          <p className="container--description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit diam
            fringilla, taciti metus aenean nostra nisi tellus hac placerat.
          </p>
        </div>
        <div className="lawnImages-container">
          <PropertySlider images={lawnImages} />
        </div>
        <div className="container--text">
          <h3 className="container--title">Pool</h3>
          <p className="container--description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit diam
            fringilla, taciti metus aenean nostra nisi tellus hac placerat.
          </p>
        </div>
        <div className="poolImages-container">
          <PropertySlider images={poolImages} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
