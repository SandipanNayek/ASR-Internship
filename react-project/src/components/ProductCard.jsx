import { FaArrowRightLong } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p className="brand-name">{product.brand}</p>

      <div className="product-bottom">
        <span>₹{product.price}</span>

        <button onClick={() => addToCart(product)}>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;