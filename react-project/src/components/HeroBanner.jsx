import { FaArrowRight } from "react-icons/fa6";
import shoe from "../assets/jordan_shoe-removebg-preview.png"; // use any shoe image

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-content">

        <span className="hero-tag">
          NEW ARRIVAL
        </span>

        <h1>
          MEN'S <br />
          COLLECTION
        </h1>

        <p>
          Discover premium sneakers designed for
          comfort, style and performance.
        </p>

        <h2>UP TO 40% OFF</h2>

        <button className="hero-btn">
          Shop Now
          <FaArrowRight />
        </button>

      </div>

      <div className="hero-image">
        <img src={shoe} alt="shoe" />
      </div>
    </section>
  );
}

export default HeroBanner;