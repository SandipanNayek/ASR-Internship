import { useState } from "react";

function FilterBar({ selectedBrand, setSelectedBrand, sortBy, setSortBy }) {
  const brands = ["All", "Nike", "Adidas", "Puma", "Jordan", "Reebok"];

  return (
    <section className="filter-section">
      <div className="filter-left">
        <h3>Brands</h3>

        <div className="brand-buttons">
          {brands.map((brand) => (
            <button
              key={brand}
              className={selectedBrand === brand ? "active-brand" : ""}
              onClick={() => setSelectedBrand(brand)}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-right">
        <h3>Sort By</h3>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low">Price : Low → High</option>
          <option value="high">Price : High → Low</option>
        </select>
      </div>
    </section>
  );
}

export default FilterBar;