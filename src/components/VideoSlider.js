import React from "react";
import Slider from "react-slick";
import "../styles/VideoSlider.css";

const VideoSlider = ({ videos }) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    variableWidth: true,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className="video-slider-container">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="video-slide">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
