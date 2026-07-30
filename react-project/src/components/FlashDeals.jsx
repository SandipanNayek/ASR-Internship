import { FaShoppingCart, FaHeart, FaRegHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";

const flashDeals = [
  {
    id: 1,
    title: "Nike Air Max",
    brand: "Nike",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    oldPrice: 9999,
    price: 5999,
    discount: "40% OFF",
  },
  {
    id: 2,
    title: "Adidas Ultraboost",
    brand: "Adidas",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600",
    oldPrice: 12999,
    price: 7999,
    discount: "38% OFF",
  },
  {
    id: 3,
    title: "Puma RS-X",
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600",
    oldPrice: 8999,
    price: 4999,
    discount: "45% OFF",
  },
  {
    id: 4,
    title: "Jordan Retro",
    brand: "Jordan",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600",
    oldPrice: 15999,
    price: 9999,
    discount: "37% OFF",
  },
];

function FlashDeals() {
  const { addToCart } = useCart();

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();

  return (
    <section className="flash-deals">
      <div className="section-title">
        <h2>⚡ Flash Deals</h2>
        <p>Limited-time offers on our best-selling sneakers.</p>
      </div>

      <div className="flash-grid">
        {flashDeals.map((shoe) => {
          const isWishlisted = wishlist.some(
            (item) => item.id === shoe.id
          );

          return (
            <div className="flash-card" key={shoe.id}>
              <span className="discount-badge">
                {shoe.discount}
              </span>


              <img src={shoe.image} alt={shoe.name} />

              <h3>{shoe.name}</h3>

              <div className="price-box">
                <span className="old-price">₹{shoe.oldPrice}</span>
                <span className="new-price">₹{shoe.price}</span>
              </div>

              <button
                onClick={() => {
                  addToCart(shoe);
                  
                }}
              >
                <FaShoppingCart />
                Add to Cart
              </button>

              <button
                className="wishlist-bottom-btn"
                onClick={() =>
                  isWishlisted
                    ? removeFromWishlist(shoe.id)
                    : addToWishlist(shoe)
                }
              >
                {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                {isWishlisted ? "Remove Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FlashDeals;