import React from "react";
import "./Testimonial.css";
// import Contact from '../contact/Contact';
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";
import profile5 from "../../img/profile5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
const Testimonial = () => {
  const clients = [
    {
      img: profile1,
      review:
        "This is random text written by tiwari to check positioning of tags in testimonial.."
    },
    {
      img: profile2,
      review:
        "This is random text written by tiwari to check positioning of tags in testimonial.."
    },
    {
      img: profile3,
      review:
        "This is random text written by tiwari to check positioning of tags in testimonial.."
    },
    {
      img: profile4,
      review:
        "This is random text written by tiwari to check positioning of tags in testimonial.."
    },
    {
      img: profile5,
      review:
        "This is random text written by tiwari to check positioning of tags in testimonial.."
    }
  ];
  return (
    <>
      <div className="t-wrapper">
        <div className="t-heading">
          <span>Clients You can Always get </span>
          <span>Exceptional Work</span>
          <span>From me...</span>
          <div className="blur t-blur1" style={{ backgorund: "orange" }}></div>
          <div className="blur t-blur2" style={{ backgournd: "green" }}></div>
        </div>
        {/* swiper */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="outer-slider"
        >
          {clients.map((client, index) => {
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="inner-slide">
                  <img src={client.img} alt="loading" />
                  <span>{client.review}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export default Testimonial;
