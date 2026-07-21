import WomenHeroBanner from "../components/WomenHeroBanner";
import BrandSlider from "../components/BrandSlider";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar"
import FilterBar from "../components/FilterBar";
import ProductGrid from "../components/WomenProductGrid";
import Footer from "../components/Footer";
import { useState } from "react";

function Women() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");

  return (
    <>
    <Navbar />
      <WomenHeroBanner />

      <BrandSlider />

      <SearchBar search={search} setSearch={setSearch} />

      <FilterBar
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <ProductGrid
        selectedBrand={selectedBrand}
        sortBy={sortBy}
        search={search}
        category="women"
      />

      <Footer />
    </>
  );
}

export default Women;