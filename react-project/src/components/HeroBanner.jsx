import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import shoe1 from "../assets/jordan_shoe-removebg-preview.png";
import shoe2 from "../assets/MenBanner2-removebg-preview.png";
import shoe3 from "../assets/MenBanner3-removebg-preview.png";

const banners = [
  {
    tag: "NEW ARRIVAL",
    title: "MEN'S COLLECTION",
    desc: "Discover premium sneakers crafted for comfort, style and performance.",
    offer: "UP TO 40% OFF",
    image: shoe1,
  },
  {
    tag: "TRENDING",
    title: "RUNNING SHOES",
    desc: "Engineered for speed and all-day comfort.",
    offer: "SAVE 35%",
    image: shoe2,
  },
  {
    tag: "LIMITED EDITION",
    title: "JORDAN SERIES",
    desc: "Own the newest Jordan collection before it's gone.",
    offer: "UP TO 30% OFF",
    image: shoe3,
  },
];

function HeroBanner() {
  return (
    <div className="hero-swiper">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={900}
        
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <section className="hero-banner">
              <div className="banner-content">
                <span className="banner-tag">{banner.tag}</span>

                <h1>{banner.title}</h1>

                <p>{banner.desc}</p>

                <h2>{banner.offer}</h2>

                <button className="banner-btn">
                  Shop Now <FaArrowRight />
                </button>
              </div>

              
                <div className="banner-image">
                  <img src={banner.image} alt={banner.title} />
                
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroBanner;