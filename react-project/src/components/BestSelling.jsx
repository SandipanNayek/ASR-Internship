import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

function BestSelling() {
  const [activeTab, setActiveTab] = useState("Man");
  const { addToCart } = useCart();

  const tabs = ["Man", "Woman", "Boy", "Girl"];

  const products = [
    {
      id: 1,
      badge: "NEW",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTABq-BchP1HCv_mnSyMS9HFahKbpI5uoLcGNNfJN2eZQKouN9UwUs5R0kwd3vTf-pocEeltiOsYh67gExYsBa76Ex1Gz0-MEySCm_f-l0p6uBRIqKSma2Scg",
      title: "Formal Canvas Shoe for Men",
      brand: "Nike",
      category: "Lifestyle",
      price: 2999,
      oldPrice: 4999,
    },
    {
      id: 2,
      badge: "NEW",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCe7uIJNnvfWntkOFffLRM9y96h6Uk19qFfUVlEPPf7VgJtqug-mLIOfY&s=10",
      title: "Sneakers Shoe for Men",
      brand: "Adidas",
      category: "Running",
      price: 2999,
      oldPrice: 4999,
    },
    {
      id: 3,
      badge: "NEW",
      image:
        "https://neemans.com/cdn/shop/files/ND-RSS-Black-_WebOptimized_e_7b92e697-8b15-4d3b-8aa8-3421d88ac957.jpg?v=1724988321&width=1600",
      title: "Slick Sneakers Shoe",
      brand: "Puma",
      category: "Lifestyle",
      price: 2999,
      oldPrice: 4999,
    },
    {
      id: 4,
      badge: "NEW",
      image:
        "https://imgmediagumlet.lbb.in/media/2024/02/65ddb52ad48dd457a849dbdc_1709028650244.jpg",
      title: "Slick Running Shoes",
      brand: "Reebok",
      category: "Running",
      price: 2999,
      oldPrice: 4999,
    },
    {
      id: 5,
      badge: "NEW",
      image:
        "https://levmanzhai.github.io/Shoes-E-commerce-Website/assets/images/shoes/shoes-4.png",
      title: "Formal Canvas Shoe",
      brand: "Nike",
      category: "Lifestyle",
      price: 2999,
      oldPrice: 4999,
    },
    {
      id: 6,
      badge: "NEW",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXueBqrd2CQriv8dcZA3jHTSNza8ntaBQ1YBWNQ32vAq7-lC732cAcDAe-&s=10",
      title: "Formal Slick Shoe",
      brand: "Jordan",
      category: "Casual",
      price: 2999,
      oldPrice: 4999,
    },
  ];

  return (
    <section className="best-selling-section">
      <div className="container">
        <div className="bs-header">
          <span className="red-dash">—</span>
          <h2>Best Selling</h2>
          <span className="red-dash">—</span>
        </div>

        <div className="bs-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "bs-tab active" : "bs-tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bs-grid">
          {products.map((product) => (
            <div className="bs-card" key={product.id}>
              <span className="bs-badge">{product.badge}</span>

              <div className="bs-img-box">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="bs-info">
                <h3>{product.title}</h3>

                <div className="bs-price-row">
                  <div className="bs-prices">
                    <span className="price-current">
                      ₹{product.price}
                    </span>

                    <span className="price-old">
                      ₹{product.oldPrice}
                    </span>
                  </div>

                  <button
                    className="bs-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    <FaArrowRight
                      style={{
                        transform: "rotate(-45deg)",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSelling;