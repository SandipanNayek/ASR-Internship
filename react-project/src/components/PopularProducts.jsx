import { FaArrowRightLong } from "react-icons/fa6";
import {Swiper , SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"
import "swiper/css";
function PopularProducts(){
    const products = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXrKM2bRWRiZ-rupvHkHRvp-6df_JYJSByAgh2LExwFabrLfcOc6AhSA&s=10",
      title: "Running canvas shoes",
      price: "Rs. 9763.00",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQjAjBF_fdX0t9KKIjS86DglkUzB8meYoZNVFzNSwHX_Y1MvIMt3j8A4&s=10",
      title: "Running casual shoes",
      price: "Rs. 2999.00",
    },
    {
      image:
        "https://wwd.com/wp-content/uploads/2019/07/nike-air-max-1-og.jpg",
      title: "Casual Nike shoes",
      price: "Rs. 2899.00",
    },
    {
      image:
        "https://img.tatacliq.com/images/i9/437Wx649H/MP000000016417721_437Wx649H_202302061850441.jpeg",
      title: "Casual Adidas shoes",
      price: "Rs. 10999.00",
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/395111/01/sv01/fnd/IND/fmt/png/Smashic-Women's-Comfort-Casual-Sneakers",
      title: "Casual puma shoes",
      price: "Rs. 2999.00",
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/379988/02/sv01/fnd/IND/fmt/png/Scorch-Runner-V2-Men's-Running-Shoes",
      title: "puma runner",
      price: "Rs. 4999.00",
    },
  ];

  return (
    <section class="popular">
        <div class="popular-intro">
            <h5 class="section-subtitle">— Our Trending Shoes</h5>
            <h2>Most Popular <br/> Products</h2>
            <p>Specializes in providing high-quality,<br/> stylish products for your wardrobe.</p>
            <button class="btn btn-black">Explore</button>
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
    {products.map((product, index) => (
        <SwiperSlide key={index}>
            <div className="card">
                <img
                    src={product.image}
                    alt={product.title}
                />

                <h3 className="card-title">
                    {product.title}
                </h3>

                <div className="card-info">
                    <span className="card-price">
                        {product.price}
                    </span>

                    <button className="cart-btn">
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>
        </SwiperSlide>
    ))}
</Swiper>
    </section>
  )
}

export default PopularProducts