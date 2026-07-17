import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import model from "../assets/shoe-removebg-preview.png"
import im from "../assets/newimg.jpeg"
function PromoSection() {
  const shoeRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    shoeRef.current.style.animation = "none";

    shoeRef.current.style.transform = `rotate(-15deg) translate(${x / -25}px, ${y / -25}px)`;
  };

  const handleMouseLeave = () => {
    shoeRef.current.style.transform =
      "rotate(-15deg) translate(0px,0px)";

    shoeRef.current.style.animation =
      "slowFloat 5s ease-in-out infinite";
  };

  return (
    <section className="promo-section">
      <div className="container">
        <div
          className="promo-banner"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="promo-left">
            <img
              src={im}
              alt="Model"
            />
          </div>

          <div className="promo-center">
            <p className="promo-subtitle">
              LIMITED OFFER
            </p>

            <h2>
              35% off only this friday
              <br />
              and get special gift
            </h2>

            <button className="promo-btn">
              Grab it now
              <FaArrowRightLong />
            </button>
          </div>

          <div className="promo-right">
            <img
              ref={shoeRef}
              className="promo-shoe"
              src={model}
              alt="Promo Shoe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;