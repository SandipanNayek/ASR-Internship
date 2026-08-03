import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Wishlist is Empty</h2>

        <p>
          Save your favourite shoes to buy them later.
        </p>

        <button
          className="shop-btn"
          onClick={() => (window.location.href = "/")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">
        My Wishlist
      </h1>

      <div className="cart-items">
        {wishlist.map((item) => (
          <div
            className="cart-card"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className="cart-info">
              <h3>{item.title}</h3>

              {item.brand && (
                <p className="cart-brand">
                  {item.brand}
                </p>
              )}

              <p className="cart-price">
                ₹ {item.price}
              </p>

              <div className="cart-actions">
                <button
                  className="checkout-btn"
                  style={{
                    width: "220px",
                    marginTop: 0,
                  }}
                  onClick={() => {
                    addToCart(item);
                    removeFromWishlist(item.id);
                  }}
                >
                  Add To Cart
                </button>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromWishlist(item.id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;