
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increase,
    decrease,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Add your favourite shoes to start shopping.</p>
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
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-container">
        {/* Left Side */}
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
              />

              <div className="cart-info">
                <h3>{item.title}</h3>

                {item.brand && (
                  <p className="cart-brand">{item.brand}</p>
                )}

                <p className="cart-price">
                  ₹ {item.price}
                </p>

                <div className="cart-actions">
                  <button
                    className="qty-btn"
                    onClick={() => decrease(item.id)}
                  >
                    −
                  </button>

                  <span className="qty">
                    {item.quantity}
                  </span>

                  <button
                    className="qty-btn"
                    onClick={() => increase(item.id)}
                  >
                    +
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row summary-total">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;