import React from "react";
import "./Portfolio.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import musicapp from "../../img/musicapp.png";
import Hoc from "../../img/hoc.png";
import sidebar from "../../img/sidebar.png";
// import Movie from "../../img/amazon.png ";
// import Testimonial from "../testimonial/Testimonial";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        {/* heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* swiper */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <img src={sidebar} alt="loading" />
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src={Movie} alt="loading" /> */}
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hoc} alt="loading" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={musicapp} alt="loading" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Portfolio;
