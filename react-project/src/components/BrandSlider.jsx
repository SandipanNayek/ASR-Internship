import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../styles/BrandSlider.css";
import "swiper/css";

const brands = [
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    name: "Puma",
    logo: "https://static.vecteezy.com/system/resources/previews/022/076/746/non_2x/puma-logo-and-art-free-vector.jpg",
  },
  {
    name: "Reebok",
    logo: "https://images.seeklogo.com/logo-png/27/2/reebok-logo-png_seeklogo-272433.png",
  },
  {
    name: "Jordan",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Air-Jordan-Logo.png",
  },
];

function BrandSlider() {
  return (
    <section className="brand-slider">
      <div className="brand-heading">
        <h2>Shop By Brand</h2>
        <p>Choose your favourite brand</p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={25}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="brand-card">
              <img src={brand.logo} alt={brand.name} />
              <h4>{brand.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default BrandSlider;