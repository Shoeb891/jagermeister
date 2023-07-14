import React from "react";
import "../styles/Testimonials.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import ScrollAnimation from "../components/ScrollAmination";

const Testimonials = () => {
  return (
    <>
      <Navbar />
      <ScrollAnimation>
        <section className="client">
          <div className="section__container client__container">
            <ScrollAnimation>
              <h2 className="section__header">What our guests say</h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="client__grid">
                <div className="client__card">
                  <img src="download.png" alt="client" />
                  <p>
                    What a place, what an experience. You need to visit it to
                    feel it. Have been there yesterday with cousins and it was
                    awesome. Nice swimming pool, Lawn, Bonfire place, spacious
                    rooms, fully furnished to spend time with you near and dear
                    ones. I would recommend this place for anyone looking to
                    spend time away from busy city life..
                  </p>
                </div>
                <div className="client__card">
                  <img
                    src="https://github.com/Shoeb891/jagermeister/blob/master/src/assests/header.png"
                    alt="client"
                  />
                  <p>
                    Best farmhouse within budget with all the
                    amenities......staff is friendly and helpful
                  </p>
                </div>
                <div className="client__card">
                  <img src="https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/" />
                  <p>
                    A true combination of luxury and comfort. This villa is so
                    well planned that it has every amenity you can think of for
                    your holiday. The look and feel is awesome and gives you all
                    5 star comforts but yet makes you feel like home away from
                    home.
                  </p>
                </div>
                <div className="client__card">
                  <img src="download.png" alt="client" />
                  <p>
                    Property and interior is just amazing and each and every
                    corner of the place has its own vibes. Definitely a perfect
                    place to visit!
                  </p>
                </div>
                <div className="client__card">
                  <img src="download.png" alt="client" />
                  <p>
                    This is by far the most beautiful and comfortable farm stay
                    I have been to. The ambiance is beautiful and its a perfect
                    get away to just relax and spend quality time with family.
                    The amenities include swimming pool, bonfire and cycling. A
                    very picturesque creation.
                  </p>
                </div>
                <div className="client__card">
                  <img src="download.png" alt="client" />
                  <p>
                    his beautiful property had all the amenities with luxury…it
                    had all the comfort..pool for kids..kitchen..open
                    balcony..swing..refrigerator..a garden…had a good time with
                    siblings there..would recommend this place 👍🏻
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Testimonials;
