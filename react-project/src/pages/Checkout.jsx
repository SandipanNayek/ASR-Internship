import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/Checkout.css";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [payment, setPayment] = useState("cod");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 0 : 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  const placeOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    if (!formData.name.trim()) {
      toast.error("Please enter your full name");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }

    if (!formData.address.trim()) {
      toast.error("Please enter your address");
      return;
    }

    if (!formData.city.trim()) {
      toast.error("Please enter your city");
      return;
    }

    if (!formData.state.trim()) {
      toast.error("Please enter your state");
      return;
    }

    if (!formData.pincode.trim()) {
      toast.error("Please enter your PIN Code");
      return;
    }

    clearCart();

    toast.success("🎉 Order placed successfully!");

    navigate("/order-success");
  };

  console.log(cart);

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-container">

        {/* Billing Section */}

        <div className="billing-section">

          <h2>Billing Details</h2>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              rows="4"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter delivery address"
            ></textarea>
          </div>

          <div className="double-input">

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
              />
            </div>

          </div>

          <div className="form-group">
            <label>PIN Code</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="PIN Code"
            />
          </div>

          <h2 className="payment-title">Payment Method</h2>

          <div className="payment-options">

            <label>
              <input
                type="radio"
                checked={payment === "cod"}
                onChange={() => setPayment("cod")}
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                checked={payment === "upi"}
                onChange={() => setPayment("upi")}
              />
              UPI
            </label>

            <label>
              <input
                type="radio"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />
              Credit / Debit Card
            </label>

          </div>

        </div>

        

        <div className="summary-section">

          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div className="summary-item" key={item.id}>

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="summary-details">
              <h4>{item.title}</h4>

              <p className="summary-description">
                Brand: {item.brand}
              </p>

              <p className="summary-qty">
                Quantity: {item.quantity}
              </p>
            </div>

              <span>₹ {item.price * item.quantity}</span>

            </div>
          ))}

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹ {subtotal}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `₹ ${shipping}`}</span>
          </div>

          <div className="summary-row">
            <span>Tax (5%)</span>
            <span>₹ {tax}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
}

export default Checkout;