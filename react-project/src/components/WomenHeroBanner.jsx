import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import shoe1 from "../assets/women-jorden.png";
import shoe2 from "../assets/WomenBanner2-removebg-preview.png";
import shoe3 from "../assets/WomenBanner5-removebg-preview.png";

const banners = [
  {
    tag: "NEW ARRIVAL",
    title: "WOMEN'S COLLECTION",
    desc: "Explore elegant sneakers crafted for comfort, fashion and everyday confidence.",
    offer: "UP TO 40% OFF",
    image: shoe1,
  },
  {
    tag: "TRENDING",
    title: "RUNNING COLLECTION",
    desc: "Move freely with lightweight running shoes designed for performance.",
    offer: "SAVE 35%",
    image: shoe2,
  },
  {
    tag: "LIMITED EDITION",
    title: "PREMIUM STYLES",
    desc: "Discover exclusive women's sneakers from top global brands.",
    offer: "UP TO 30% OFF",
    image: shoe3,
  },
];

function WomenHeroBanner() {
  return (
    <div className="women-hero-swiper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={900}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <section className="women-hero-banner">
              <div className="women-banner-content">
                <span className="women-banner-tag">{banner.tag}</span>

                <h1>{banner.title}</h1>

                <p>{banner.desc}</p>

                <h2>{banner.offer}</h2>

                <button className="women-banner-btn">
                  Shop Now <FaArrowRight />
                </button>
              </div>

              <div className="women-banner-image">
                <img src={banner.image} alt={banner.title} />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WomenHeroBanner;