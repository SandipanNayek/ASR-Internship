import { FaCartPlus } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    brand: "Nike",
    price: 5999,
    oldPrice: 8999,
    discount: "33% OFF",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    brand: "Adidas",
    price: 7499,
    oldPrice: 10999,
    discount: "32% OFF",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
  },
  {
    id: 3,
    name: "Puma RS-X",
    brand: "Puma",
    price: 5499,
    oldPrice: 7999,
    discount: "31% OFF",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
  },
  {
    id: 4,
    name: "Jordan Retro",
    brand: "Jordan",
    price: 9999,
    oldPrice: 14999,
    discount: "34% OFF",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=500",
  },
  {
    id: 5,
    name: "New Balance 550",
    brand: "New Balance",
    price: 6999,
    oldPrice: 9999,
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
  },
  {
    id: 6,
    name: "Converse High",
    brand: "Converse",
    price: 4499,
    oldPrice: 6999,
    discount: "36% OFF",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
  },
];

function TrendingSaleProducts() {
  return (
    <section className="trending-sale">

      <div className="section-title">
        <h2>🔥 Trending Sale Products</h2>
        <p>Grab these best-selling sneakers before the sale ends.</p>
      </div>

      <div className="trending-grid">
        {products.map((product) => (
          <div className="trending-card" key={product.id}>

            <span className="sale-badge">
              {product.discount}
            </span>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="brand">{product.brand}</p>

            <div className="price-row">
              <span className="old-price">
                ₹{product.oldPrice}
              </span>

              <span className="new-price">
                ₹{product.price}
              </span>
            </div>

            <button>
              <FaCartPlus />
              Add to Cart
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}

export default TrendingSaleProducts;