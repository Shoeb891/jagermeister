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
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/pool/IMG_8050.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8051.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8052.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/kitchen/IMG_8053.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8054.jpg?raw=true",
    "https://github.com/Shoeb891/jagermeister/blob/master/src/assests/interior/IMG_8055.jpg?raw=true",
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <div class="container---">
        <h1>A Creations Farm Stay</h1>

        <p>
          Welcome to A Creations Farm Stay! Escape the hustle and bustle of city
          life and experience the tranquility of our charming farm rental.
          Nestled in a serene location, our farm stay offers a perfect getaway
          for a relaxing and rejuvenating experience.
        </p>

        <p>
          Immerse yourself in the natural beauty that surrounds our farm. Enjoy
          the picturesque landscapes, breathe in the fresh country air, and
          reconnect with nature. Whether you're seeking a peaceful retreat or an
          adventure-filled stay, A Creations Farm Stay has something to offer
          for everyone.
        </p>

        <p>
          Our farm rental provides a range of amenities to ensure a comfortable
          and enjoyable stay. Take a refreshing dip in the swimming pool or
          engage in water games to beat the heat. Unwind at the bar counter and
          savor a variety of drinks and cocktails prepared by our skilled
          bartenders. Experience the joy of outdoor grilling with our BBQ
          facilities and indulge in flavorful meals cooked with coal.
        </p>

        <p>
          As the sun sets, gather around the bonfire and create unforgettable
          memories with your loved ones. Explore the surroundings on
          complimentary bicycles or engage in friendly competition with a
          collection of board games available for your entertainment.
        </p>

        <p>
          Our well-equipped kitchen is at your disposal, complete with a gas
          stove, utensils, and crockery. Prepare your favorite meals using fresh
          ingredients and enjoy a homely dining experience. Additionally, a
          microwave and double door refrigerator are provided for your
          convenience.
        </p>

        <p>
          We understand the importance of uninterrupted comfort during your
          stay. In the event of a power outage, our generator ensures a seamless
          experience.
        </p>

        <p>
          For parties and corporate events, we offer tailored packages to cater
          to your specific needs. With a capacity to accommodate up to 100
          guests, our farm stay provides a unique and picturesque venue for your
          special occasions.
        </p>

        <p>
          To get a glimpse of the beauty that awaits you at A Creations Farm
          Stay, feel free to browse through our{" "}
          <a href="https://drive.google.com/drive/folders/1-UmEzmp_RIxe1hCB-GrLmRy7WSHHtNnL">
            photo gallery
          </a>
          .
        </p>
        <h1>AMENITIES</h1>
        <p>
          We take pride in offering a wide range of amenities to make your
          experience enjoyable and memorable. Here is a list of amenities
          available:
        </p>
        <ol class="amenities-list">
          <li>
            Swimming Pool: Take a refreshing dip in our sparkling swimming pool.
            Enjoy a relaxing swim or engage in water games to make the most of
            your time.
          </li>
          <li>
            Bar Counter Setup: Unwind and socialize at our fully equipped bar
            counter. Enjoy a variety of drinks and cocktails prepared by our
            skilled bartenders.
          </li>
          <li>
            BBQ (Coal): Experience the joy of outdoor grilling with our BBQ
            facilities. Cook up delicious meals using coal and enjoy a flavorful
            dining experience.
          </li>
          <li>
            Bonfire: Gather around a cozy bonfire and create unforgettable
            memories. Please note that there is an additional charge of ₹1500
            for a two-hour bonfire session.
          </li>
          <li>
            Cycling: Explore the surroundings on two wheels with our
            complimentary cycling facilities. Discover the area's scenic beauty
            while enjoying a leisurely ride.
          </li>
          <li>
            Water Games in Swimming Pool: Dive into the fun with our exciting
            water games in the swimming pool. Engage in activities that promise
            laughter and entertainment.
          </li>
          <li>
            Board Games: Spend quality time indoors with our collection of board
            games. Challenge your friends and family to a friendly competition.
          </li>
          <li>
            Kitchen: Our well-equipped kitchen is at your disposal. It includes
            a gas stove, utensils, and crockery, allowing you to prepare your
            favorite meals during your stay.
          </li>
          <li>
            Microwave: Conveniently warm up snacks or heat leftovers using the
            microwave available in your accommodation.
          </li>
          <li>
            Double Door Refrigerator: Store your food and beverages in our
            spacious double door refrigerator. Keep your items fresh and easily
            accessible.
          </li>
          <li>
            Generator: In the event of a power outage, our generator ensures
            uninterrupted electricity supply, allowing you to enjoy your stay
            without any disruptions.
          </li>
        </ol>

        <div class="contact---info">
          <p>For bookings and further inquiries, please contact us at:</p>
          <p>Phone: 9393031001, 9390058561</p>
          <h1>LOCATION</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7620.205964181371!2d78.325506!3d17.262252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbf271a7aa60b%3A0x1fee920eb7355b98!2sA%20Creations%20Farm%20Stay!5e0!3m2!1sen!2sin!4v1689205088239!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
