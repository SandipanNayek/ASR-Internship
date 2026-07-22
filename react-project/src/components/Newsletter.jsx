import { FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <h2>Stay Updated!</h2>

        <p>
          Subscribe to receive exclusive offers, new arrivals,
          flash sales, and special discount coupons directly in
          your inbox.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            <FaPaperPlane />
            Subscribe
          </button>
        </form>

      </div>

    </section>
  );
}

export default Newsletter;