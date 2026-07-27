import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "../styles/OrderSuccess.css";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">
        <FaCircleCheck className="success-icon" />

        <h1>Order Placed!</h1>

        <p>
          Thank you for shopping with Jumpman.
          <br />
          Your order has been placed successfully.
        </p>

        <button
          className="success-btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;