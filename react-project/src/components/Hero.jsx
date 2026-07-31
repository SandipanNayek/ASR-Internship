import { useState } from "react";
import Navbar from "./Navbar";

import mainShoe from "../assets/jordan_shoe-removebg-preview.png";
import purpleShoe from "../assets/shoe-purple-removebg-preview.png";
import greenShoe from "../assets/shoe-green-removebg-preview.png";

function Hero() {
  const [shoe, setShoe] = useState(mainShoe);
  const [activeColor, setActiveColor] = useState(2);
  const [activeDot, setActiveDot] = useState(2);

  const shoes = [
    purpleShoe,
    greenShoe,
    mainShoe,
  ];
 
  return (
    <header className="hero">
      <Navbar />

      <div className="hero-bg-text">
        JUMPMAN
      </div>

      <div className="hero-content">
        <h1 className="jump-text">
          Jump
        </h1>
         <p className="hero-subtitle">
              BASKETBALL SHOES
           </p>
        <div className="hero-image">
          <img
            src={shoe}
            id="shoe"
            alt="Jordan Shoe"
          />
        </div>

        <div className="hero-info">
          <h1 className="man-text">
            man
          </h1>

          <span className="year">
            2021 PF
          </span>

          <h2>134$</h2>

          <h3>
            JORDAN
            <br />
            JUMPMAN 2021 PF
          </h3>

          <p>
            Lightweight responsive basketball shoe
            designed for speed, stability and comfort.
            Premium cushioning with superior grip.
          </p>
        </div>
      </div>

      

      <div className="shoe-colors">
        <p>SHOE COLORS</p>

        <div className="color-list">
          {shoes.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="shoe"
              className={activeColor === index ? "active" : ""}
              onClick={() => {
                setShoe(item);
                setActiveColor(index);
              }}
            />
          ))}
        </div>
      </div>

      

      <div className="hero-buttons">
        <button className="btn btn-white">
          ADD TO CART
        </button>

        <button className="btn btn-black">
          BUY NOW
        </button>
      </div>

      

      <div className="hero-dots">
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={activeDot === dot ? "active" : ""}
            onClick={() => setActiveDot(dot)}
          ></span>
        ))}
      </div>
    </header>
  );
}

export default Hero;