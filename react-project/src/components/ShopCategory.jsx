import {
    FaShoePrints,
  FaPersonRunning,
  FaBasketball,
  FaPersonWalking,
  FaDumbbell,
  FaFutbol,
} from "react-icons/fa6";
import "../styles/ShopCategory.css";

const categories = [
  {
    id: 0,
    title: "All",
    subtitle: "View all shoes",
    icon: <FaShoePrints />,
  },
  {
    id: 1,
    title: "Running",
    subtitle: "Lightweight running shoes",
    icon: <FaPersonRunning />,
  },
  {
    id: 2,
    title: "Basketball",
    subtitle: "Court performance",
    icon: <FaBasketball />,
  },
  {
    id: 3,
    title: "Lifestyle",
    subtitle: "Everyday fashion",
    icon: <FaPersonWalking />,
  },
  {
    id: 4,
    title: "Training",
    subtitle: "Gym collection",
    icon: <FaDumbbell />,
  },
  {
    id: 5,
    title: "Football",
    subtitle: "Built for speed",
    icon: <FaFutbol />,
  },
];

function ShopCategory({
    selectedCategory,
    setSelectedCategory
}) {
  return (
    <section className="shop-category">
      <div className="category-heading">
        <h2>Shop by Category</h2>
        <p>Find the perfect pair for every activity.</p>
      </div>

      <div className="category-grid">
        {categories.map((item) => (
            <div
            key={item.id}
            className={`category-card ${
                selectedCategory === item.title ? "active-category" : ""
            }`}
            onClick={() => {
                console.log("Clicked:", item.title);
                //alert(item.title);
                setSelectedCategory(item.title);
                }}
            >
            <div className="category-icon">
                {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.subtitle}</p>
            </div>
        ))}
      </div>
    </section>
  );
}

export default ShopCategory;