import { useState } from "react";
import KidsHeroBanner from "../components/KidsHeroBanner";
import BrandSlider from "../components/BrandSlider";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import KidsProductGrid from "../components/KidsProductGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Kids.css";

function Kids() {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("Default");
  const [search, setSearch] = useState("");

  return (
    <>
    <Navbar/>
      <KidsHeroBanner />

      <BrandSlider
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />

      <SearchBar search={search} setSearch={setSearch} />

      <FilterBar
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <KidsProductGrid
        selectedBrand={selectedBrand}
        sortBy={sortBy}
        search={search}
      />

      <Footer />
    </>
  );
}

export default Kids;