import SaleHeroBanner from "../components/SaleHeroBanner";
import FlashDeals from "../components/FlashDeals";
import Navbar from "../components/Navbar";
import DiscountCategories from "../components/DiscountCategories";
import TrendingSaleProducts from "../components/TrendingSaleProducts";
import TopBrandsSale from "../components/TopBrandsSale";
import CustomerReviews from "../components/CustomerReviews";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


import "../styles/Sale.css";

function Sale() {
  return (
    <>
     <Navbar/>
      <SaleHeroBanner />

      <FlashDeals />

      <DiscountCategories />

      <TrendingSaleProducts />

      <TopBrandsSale />
      <CustomerReviews/>

      <Newsletter />

      <Footer />
    </>
  );
}

export default Sale;