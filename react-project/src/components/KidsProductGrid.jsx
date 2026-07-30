import kidsProducts from "../data/kidsProducts";
import ProductCard from "./ProductCard";

function KidsProductGrid({
  selectedBrand,
  sortBy,
  selectedCategory,
  search,
  priceRange,
}) {
  let filteredProducts =
    selectedBrand === "All"
      ? [...kidsProducts]
      : kidsProducts.filter(
          (item) => item.brand === selectedBrand
        );

        if (selectedCategory !== "All") {
    filteredProducts = filteredProducts.filter(
      (item) => item.category === selectedCategory
    );
  }

  // Search Filter
  if (search.trim() !== "") {
    filteredProducts = filteredProducts.filter(
      (item) =>
        item.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.brand
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }

  // Price Filter
  filteredProducts = filteredProducts.filter(
    (item) => item.price <= priceRange
  );

  // Sorting
  if (sortBy === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="product-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      ) : (
        <div className="no-products">
          <h2>No products found</h2>
          <p>Try changing the search, brand, or price range.</p>
        </div>
      )}
    </section>
  );
}

export default KidsProductGrid;