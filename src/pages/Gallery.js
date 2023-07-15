import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertySlider from "../components/PropertySlider";
import ScrollAnimation from "../components/ScrollAmination";
import Whatsapp from "../components/Whatsapp";

import "../styles/PropertySlider.css";
import "../styles/Gallery.css";

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
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/2022-10-09%20(1).jpg",
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
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/bar-counter/2022-10-25%20(1).jpg",
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
      <ScrollAnimation>
        <div className="gallery--container">
          <ScrollAnimation>
            <h3 className="gallery--title">Explore Our Gallery</h3>
          </ScrollAnimation>

          <ScrollAnimation>
            <p className="gallery--description">
              Immerse yourself in the captivating beauty of our farm stay
              through our carefully curated photo gallery. Each image captures
              the essence of our serene surroundings, charming accommodations,
              and the authentic farm experience we offer.
            </p>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Interior</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Step into our beautifully designed interior spaces that exude
                  comfort and charm. Every detail has been carefully crafted to
                  create a warm and inviting ambiance, ensuring a delightful
                  stay for our guests.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="interiorImages-container">
              <PropertySlider images={interiorImages} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Pool</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Dive into ultimate relaxation in our refreshing pool. Take a
                  dip to beat the heat, swim a few laps, or simply lounge by the
                  poolside while enjoying the tranquil surroundings. Our pool
                  area provides the perfect escape to rejuvenate and unwind.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="poolImages-container">
              <PropertySlider images={poolImages} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Lawn</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Our sprawling lawn offers a serene outdoor space where you can
                  relax and bask in the beauty of nature. Surrounded by lush
                  greenery, it's the perfect spot for a leisurely stroll, an
                  afternoon picnic, or simply unwinding with a good book.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="lawnImages-container">
              <PropertySlider images={lawnImages} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Bar Counter Setup</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Unwind and socialize at our well-equipped bar counter.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="barCounterImages-container">
              <PropertySlider images={barCounterImages} />
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="container--text">
              <ScrollAnimation>
                <h3 className="container--title">Kitchen</h3>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="container--description">
                  Our fully equipped kitchen is a haven for culinary
                  enthusiasts. Prepare your favorite meals using top-of-the-line
                  appliances, cookware, and utensils. Embrace your inner chef
                  and delight in creating delicious dishes that cater to your
                  personal tastes.
                </p>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="kitchenImages-container">
              <PropertySlider images={kitchenImages} />
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default Gallery;
