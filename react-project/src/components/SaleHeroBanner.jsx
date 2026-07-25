import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import sale1 from "../assets/sale1.jpg";
import sale2 from "../assets/sale2.jpg";
import sale3 from "../assets/sale3.jpg";

const banners = [
  {
    title: "MEGA SALE",
    offer: "UP TO 70% OFF",
    desc: "Discover premium sneakers from top brands at unbeatable prices.",
    button: "Shop Now",
    image: sale1,
  },
  {
    title: "FLASH DEALS",
    offer: "BUY 2 GET 1 FREE",
    desc: "Limited-time offers on Nike, Adidas, Puma and more.",
    button: "Explore Deals",
    image: sale2,
  },
  {
    title: "CLEARANCE SALE",
    offer: "LAST CHANCE",
    desc: "Grab your favorite shoes before they're gone forever.",
    button: "Grab Now",
    image: sale3,
  },
];

function SaleHeroBanner() {
  return (
    <div className="sale-hero-swiper">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        speed={900}
       
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <section className="sale-banner">

              <div className="sale-content">
                <span className="sale-tag">🔥 LIMITED OFFER</span>

                <h1>{item.title}</h1>

                <h2>{item.offer}</h2>

                <p>{item.desc}</p>

                <button className="sale-btn">
                  {item.button}
                  <FaArrowRight />
                </button>
              </div>

              <div className="sale-image">
                <img src={item.image} alt={item.title} />
              </div>

            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SaleHeroBanner;