import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../styles/contact.css";
import { FaRoad, FaPhone, FaEnvelope } from "react-icons/fa";
import PropertySlider from "../components/PropertySlider";
import "../styles/About.css";
import "../styles/PropertySlider.css";
import "../styles/Gallery.css";

const Home = () => {
  const interiorImages = [
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/IMG_8050.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/IMG_8051.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/IMG_8052.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/IMG_8053.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/IMG_8054.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/IMG_8055.jpg?raw=true",
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <div className="about--container">
        <h3 className="title">A Creations Farm Stay</h3>
        <p className="about--description">
          Welcome to A Creations Farm Stay, where tranquility meets natural
          beauty. Our farmhouse is nestled amidst lush green fields, offering a
          serene and idyllic escape from the hustle and bustle of city life.
        </p>
        <p className="about--description">
          Immerse yourself in the charm of rural living as you explore our
          expansive property. The farmhouse is surrounded by picturesque
          landscapes, with rolling hills and vibrant meadows stretching as far
          as the eye can see. Take leisurely strolls through our gardens,
          breathe in the fresh country air, and witness the captivating beauty
          of nature.
        </p>
        <p className="about--description">
          Our farmhouse offers a range of comfortable and thoughtfully designed
          accommodations. Whether you're looking for a cozy room or a spacious
          cottage, we have the perfect retreat to suit your needs. Each
          accommodation is tastefully decorated, blending modern amenities with
          rustic charm, providing you with a truly delightful stay.
        </p>
        <p className="about--description">
          Indulge in farm-to-table dining experiences, where our talented chefs
          craft delectable meals using fresh, locally sourced ingredients. From
          hearty breakfasts to savory dinners, every bite is a culinary delight.
          You can even participate in farm activities, such as picking fresh
          produce or feeding the friendly farm animals, adding a touch of
          authenticity to your stay.
        </p>
        <p className="about--description">
          For those seeking relaxation, our farmhouse offers a range of leisure
          facilities. Unwind by the sparkling swimming pool, lounge on the sun
          deck with a refreshing drink in hand, or pamper yourself with a
          rejuvenating spa treatment. Alternatively, you can engage in outdoor
          activities such as hiking, cycling, or simply enjoying a picnic amidst
          nature's embrace.
        </p>
        <p className="about--description">
          At A Creations Farm Stay, we prioritize sustainability and
          eco-conscious practices. We strive to minimize our environmental
          impact by implementing renewable energy sources and employing
          responsible farming techniques. You can be confident that your stay
          with us contributes to the preservation of the beautiful natural
          surroundings.
        </p>
        <p className="about--description">
          Whether you're looking for a peaceful getaway, a romantic retreat, or
          a memorable family vacation, A Creations Farm Stay is the perfect
          destination. Experience the harmony of nature, warm hospitality, and
          unparalleled serenity during your stay with us. Let us create
          unforgettable memories for you and be a part of your journey to
          reconnect with the simplicity and beauty of rural living.
        </p>
      </div>
      <div className="gallery--container">
        <h3 className="gallery--title">Explore Our Gallery</h3>
        <p className="gallery--description">
          Immerse yourself in the captivating beauty of our farm stay through
          our carefully curated photo gallery. Each image captures the essence
          of our serene surroundings, charming accommodations, and the authentic
          farm experience we offer.
        </p>
        <div className="example-container">
          <PropertySlider images={interiorImages} />
        </div>
      </div>
      <div className="cbody">
        <div className="container">
          <h1 className="brand">
            <span>A Creations</span> Farm Stay
          </h1>
          <div className="wrapper animated bounceInLeft">
            <div className="company-info">
              <h3>Universal Farms</h3>
              <ul>
                <li>
                  <FaRoad /> 6-29/121/P, Narkhuda, Shamsabad, Hyderabad,
                  Telangana 501218
                </li>
                <li>
                  <FaPhone /> 9393031001 / 9390058561
                </li>
                <li>
                  <FaEnvelope /> anupkumarheda@gmail.com
                </li>
              </ul>
            </div>
            <div className="contact">
              <h3>Contact Us</h3>
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

export default Home;
