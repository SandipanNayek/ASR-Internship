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

  return (
    <div style={{ width: "90%", margin: "40px auto" }}>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                margin: "20px 0",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                width="120"
                alt={item.title}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>

                <p>₹ {item.price}</p>

                <button onClick={() => decrease(item.id)}>
                  -
                </button>

                <span style={{ margin: "0 10px" }}>
                  {item.quantity}
                </span>

                <button onClick={() => increase(item.id)}>
                  +
                </button>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total : ₹ {total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;