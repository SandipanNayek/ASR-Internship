import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import BrandSlider from "../components/BrandSlider";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

import "../styles/men.css";

function Men() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />

      <div className="men-container">
        <HeroBanner />
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
        </div>

        <ProductGrid
          selectedBrand={selectedBrand}
          sortBy={sortBy}
          search={search}
        />
      </div>

      <Footer />
    </>
  );
}

export default Men;