import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, Autoplay } from "swiper/modules";

import kids1 from "../assets/KidsBanner-removebg-preview.png";
import kids2 from "../assets/Kidsbanner4-removebg-preview.png";
import kids3 from "../assets/KidsBanner3-removebg-preview.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Kids Collection",
    subtitle: "Comfort Meets Style",
    desc: "Discover comfortable, stylish and durable shoes specially designed for active kids.",
    image: kids1,
  },
  {
    title: "School Ready",
    subtitle: "Best Shoes For Every Adventure",
    desc: "Perfect shoes for school, sports and everyday fun with maximum comfort.",
    image: kids2,
  },
  {
    title: "New Arrivals",
    subtitle: "Cute & Durable",
    desc: "Explore the latest collection of colorful sneakers and casual shoes for kids.",
    image: kids3,
  },
];

function KidsHeroBanner() {
  return (
    <div className="hero-swiper">
      <Swiper
        modules={[ Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        speed={900}
        
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="hero-banner">
              <div className="banner-content">
                <span className="banner-tag">👦 NEW COLLECTION</span>

                <h1>{slide.title}</h1>

                <h2>{slide.subtitle}</h2>

                <p>{slide.desc}</p>

                <button className="banner-btn">
                  Shop Now
                  <FaArrowRight />
                </button>
              </div>
               
              <div className="banner-image">
                <img src={slide.image} alt={slide.title} />
              
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default KidsHeroBanner;