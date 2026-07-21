import { FaArrowRight } from "react-icons/fa6";
import shoe from "../assets/women-jorden.png"; // your women's shoe image

function WomenHeroBanner() {
  return (
    <section className="hero-banner">
      <div className="banner-content">

        <span className="banner-tag">
          NEW ARRIVAL
        </span>

        <h1>
          WOMEN'S <br />
          COLLECTION
        </h1>

        <p>
          Explore elegant sneakers crafted for comfort,
          fashion and everyday confidence.
        </p>

        <h2>UP TO 40% OFF</h2>

        <button className="banner-btn">
          Shop Now
          <FaArrowRight />
        </button>

      </div>

      <div className="banner-image">
        <img src={shoe} alt="Women's Shoe" />
      </div>
    </section>
  );
}

export default WomenHeroBanner;