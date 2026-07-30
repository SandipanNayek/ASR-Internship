import { useState } from "react";
import WomenHeroBanner from "../components/WomenHeroBanner";
import BrandSlider from "../components/BrandSlider";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import ProductGrid from "../components/WomenProductGrid";
import Footer from "../components/Footer";
import ShopCategory from "../components/ShopCategory";
import "../styles/men.css"; 

function Women() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState(20000);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Navbar />

      <WomenHeroBanner />
      <ShopCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
        />

      <BrandSlider />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterBar
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Price Range Filter */}
      <div className="price-filter">
        <h3>Price Range</h3>

        <input
          type="range"
          min="0"
          max="20000"
          step="500"
          value={priceRange}
          onChange={(e) =>
            setPriceRange(Number(e.target.value))
          }
          className="price-slider"
        />

        <p>
          ₹0 - <strong>₹{priceRange}</strong>
        </p>
      </div>
      <div className="filter-info">
  <div className="filter-chip">
    <span>Brand</span>
    <strong>{selectedBrand}</strong>
  </div>

  <div className="filter-chip">
    <span>Sort</span>
    <strong>
      {sortBy === "default"
        ? "Featured"
        : sortBy === "low"
        ? "Price: Low → High"
        : "Price: High → Low"}
    </strong>
  </div>

  <div className="filter-chip">
    <span>Max Price</span>
    <strong>₹{priceRange}</strong>
  </div>
</div>

      <ProductGrid
        selectedBrand={selectedBrand}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        search={search}
        priceRange={priceRange}
        category="women"
      />

      <Footer />
    </>
  );
}

export default Women;