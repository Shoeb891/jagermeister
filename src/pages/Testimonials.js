import React from "react";
// import pfp from "../assests/download.png";
import "../styles/Testimonials.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import ScrollAnimation from "../components/ScrollAmination";
import {FaUserAlt} from 'react-icons/fa'

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
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">Mahendar Baheti</h4>
                  </div>
                  <p>
                    What a place, what an experience. Nice swimming pool, Lawn, Bonfire place, spacious
                    rooms. I would recommend this place for anyone looking to
                    spend time away from busy city life..
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">Rohit Khanderao</h4>
                  </div>
                  <p>
                    Best farmhouse within budget with all the
                    amenities......staff is friendly and helpful
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">Anshul Augnivansh</h4>
                  </div>
                  <p>
                  A lovely farm house for parties and events. The owner Gokul is very friendly and accommodating of some requests. It’s a newly renovated property with modern amenities, a nice swimming pool, a large bar counter, a garden space with swing and bonfire to name a few
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">Anshul Augnivansh</h4>
                  </div>
                  <p>
                    Best farmhouse within budget with all the
                    amenities......staff is friendly and helpful
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">kushal kasat</h4>
                  </div>
                  <p>
                  When you are looking for farmstay in Hyderabad, A Creations Farm Stay is the answer. Besides the green expanse, the highlight of this exclusive farmstay near Shamshabad is the earthy accommodation. Aesthetically done interiors perfectly complement the modern exteriors . Luxury Rooms and  are also available. A huge lawn area, a well maintained swimming pool and much more... Really enjoyed the stay. ITS DEFINITELY VALUE FOR MONEY.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">Sushant Gagad</h4>
                  </div>
                  <p>
                  Its a perfect place to chill out and relax with family and friends. Kids enjoyed a lot at the pool area. View is beautiful and well maintained.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">ravi teja</h4>
                  </div>
                  <p>
                  Such a good place to spend the week with family and friends. Every aspect of the villa is luxurious and has been well maintained. Staff was also helpful in all areas.
Need few things to set right up for stay apart from that we had a wonderful time during the stay.
Recommended to all types of party's and gathering.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">KTM Kondapur</h4>
                  </div>
                  <p>
                   
Awesome ambience.. Well maintained Luxury villa type stay.. Swimming pool will blow your mind. A perfect way to spend your weekend with Family.
                  </p>
                </div>
              
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">Deepesh Jobanputra</h4>
                  </div>
                  <p>
                    A true combination of luxury and comfort. This villa is so
                    well planned that it has every amenity you can think of for
                    your holiday. The look and feel is awesome and gives you all
                    5 star comforts but yet makes you feel like home away from
                    home.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">Chavi Asawa</h4>
                  </div>
                  <p>
                    Property and interior is just amazing and each and every
                    corner of the place has its own vibes. Definitely a perfect
                    place to visit!
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">Priya sarda</h4>
                  </div>
                  <p>
                    This is by far the most beautiful and comfortable farm stay
                    I have been to. The ambiance is beautiful and its a perfect
                    get away to just relax and spend quality time with family.
                    The amenities include swimming pool, bonfire and cycling. A
                    very picturesque creation.
                  </p>
                </div>
                <div className="client__card">
                  <div className="user--info">
                  <FaUserAlt className="user--icon" />
                  <h4 className="user--name">Shruthi Mantri</h4>
                  </div>
                  <p>
                    This beautiful property had all the amenities with luxury…it
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