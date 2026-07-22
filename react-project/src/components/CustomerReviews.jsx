import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    review:
      "Amazing quality! I got Nike sneakers at 50% off. Delivery was super fast.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Das",
    review:
      "The discounts were genuine and the shoes are very comfortable. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Arjun Patel",
    review:
      "Great shopping experience. Secure payment and quick delivery.",
    rating: 4,
  },
];

function CustomerReviews() {
  return (
    <section className="reviews">
      <div className="section-title">
        <h2>💬 What Our Customers Say</h2>
        <p>Thousands of happy customers trust our store.</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="stars">
              {[...Array(review.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>

            <p>"{review.review}"</p>

            <h3>{review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;