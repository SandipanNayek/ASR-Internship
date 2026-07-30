import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useCart } from "../context/CartContext";
import "swiper/css";

function PopularProducts() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 101,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXrKM2bRWRiZ-rupvHkHRvp-6df_JYJSByAgh2LExwFabrLfcOc6AhSA&s=10",
      title: "Running Canvas Shoes",
      brand: "Nike",
      category: "Running",
      price: 9763,
    },
    {
      id: 102,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQjAjBF_fdX0t9KKIjS86DglkUzB8meYoZNVFzNSwHX_Y1MvIMt3j8A4&s=10",
      title: "Running Casual Shoes",
      brand: "Adidas",
      category: "Running",
      price: 2999,
    },
    {
      id: 103,
      image:
        "https://wwd.com/wp-content/uploads/2019/07/nike-air-max-1-og.jpg",
      title: "Casual Nike Shoes",
      brand: "Nike",
      category: "Lifestyle",
      price: 2899,
    },
    {
      id: 104,
      image:
        "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016417721_437Wx649H_202302061850441.jpeg",
      title: "Casual Adidas Shoes",
      brand: "Adidas",
      category: "Lifestyle",
      price: 10999,
    },
    {
      id: 105,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/395111/01/sv01/fnd/IND/fmt/png/Smashic-Women's-Comfort-Casual-Sneakers",
      title: "Casual Puma Shoes",
      brand: "Puma",
      category: "Lifestyle",
      price: 2999,
    },
    {
      id: 106,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379988/02/sv01/fnd/IND/fmt/png/Scorch-Runner-V2-Men's-Running-Shoes",
      title: "Puma Runner",
      brand: "Puma",
      category: "Running",
      price: 4999,
    },
  ];

  return (
    <section className="popular">
      <div className="popular-intro">
        <h5 className="section-subtitle">— Our Trending Shoes</h5>

        <h2>
          Most Popular <br /> Products
        </h2>

        <p>
          Specializes in providing high-quality,
          <br />
          stylish products for your wardrobe.
        </p>

        <button className="btn btn-black">Explore</button>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="card">
              <img src={product.image} alt={product.title} />

              <h3 className="card-title">{product.title}</h3>

              <div className="card-info">
                <span className="card-price">
                  ₹{product.price}
                </span>

                <button
                  className="cart-btn"
                  onClick={() => addToCart(product)}
                >
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default PopularProducts;