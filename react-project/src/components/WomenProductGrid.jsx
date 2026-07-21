import womenProducts from "../data/womenProducts";
import ProductCard from "./ProductCard";

function WomenProductGrid({ selectedBrand, sortBy, search }) {
  let filteredProducts =
    selectedBrand === "All"
      ? womenProducts
      : womenProducts.filter(
          (item) => item.brand === selectedBrand
        );

  if (search.trim() !== "") {
    filteredProducts = filteredProducts.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sortBy === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default WomenProductGrid;