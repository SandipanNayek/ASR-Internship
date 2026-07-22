const discounts = [
  {
    id: 1,
    title: "20% OFF",
    subtitle: "Casual Collection",
    color: "#4CAF50",
  },
  {
    id: 2,
    title: "30% OFF",
    subtitle: "Running Shoes",
    color: "#2196F3",
  },
  {
    id: 3,
    title: "40% OFF",
    subtitle: "Basketball",
    color: "#FF9800",
  },
  {
    id: 4,
    title: "50% OFF",
    subtitle: "Lifestyle",
    color: "#E91E63",
  },
  {
    id: 5,
    title: "60% OFF",
    subtitle: "Limited Stock",
    color: "#9C27B0",
  },
  {
    id: 6,
    title: "70% OFF",
    subtitle: "Clearance",
    color: "#F44336",
  },
];

function DiscountCategories() {
  return (
    <section className="discount-section">

      <div className="section-title">
        <h2>🏷 Shop by Discount</h2>
        <p>Choose your perfect deal and save more.</p>
      </div>

      <div className="discount-grid">
        {discounts.map((item) => (
          <div
            key={item.id}
            className="discount-card"
            style={{ background: item.color }}
          >
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default DiscountCategories;