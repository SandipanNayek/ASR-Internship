import { FaArrowRightLong } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div className="product-card">
      <button
        className="wishlist-btn"
        onClick={() => {
          if (isWishlisted) {
            removeFromWishlist(product.id);
            // toast.info(
            //   `${product.title} removed from wishlist`
            // );
          } else {
            addToWishlist(product);
            // toast.success(
            //   `${product.title} added to wishlist ❤️`
            // );
          }
        }}
      >
        {isWishlisted ? (
          <FaHeart />
        ) : (
          <FaRegHeart />
        )}
      </button>

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p className="brand-name">
        {product.brand}
      </p>

      <div className="product-bottom">
        <span>₹{product.price}</span>

        <button
          onClick={() => {
            addToCart(product);
            // toast.success(
            //   `${product.title} added to cart 🛒`
            // );
          }}
        >
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;