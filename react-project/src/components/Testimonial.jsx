import React from "react";
import {FaStar} from "react-icons/fa";

function Testimonial() {
    const testimonials = [
    {
      name: "Meythli Odex",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM5PLKkgWeErRpfn4q_1NioyGeHacRq8dntnT--iMdosEx2Rw6puRt9k&s=10",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "John Carter",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOShaq-36ry_uGsObuz0ks-aLkCSNxgihUPnTd6yG27eBnbWo9RuatPF-&s=10",
      review:
        "Excellent quality and fast delivery. The shoes are comfortable, stylish, and perfect for everyday wear.",
    },
  ];

   return (
    <section className="testimonial-section">
        <div className="container">
            <div className="test-header">
                <span className="dark-dash">—</span>
                <h2>Client Testimonial</h2>
                <span className="dark-dash">—</span>
            </div>
            <div className="testimonial-grid">
                {testimonials.map((item , index) => (
                    <div className="test-card" key={index}>
                        <img 
                        src={item.image}
                        alt={item.name}
                        className="test-img"
                        />
                        <div className="test-content">
                            <h4>{item.name}</h4>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p>{item.review}</p>
                        </div>
                    </div>
                ))}

            </div>

            <div className="test-dots">
                <span className="active"></span>
                <span></span>
                <span></span>
                <span></span>

            </div>
        </div>

    </section>
   )
}

export default Testimonial