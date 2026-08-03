
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import PopularProducts from "../components/PopularProducts";
import PromoSection from "../components/PromoSection"
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import AIShoeAssistant from "../components/AIShoeAssistant";
import '../App.css'

function Home() {
  

  return (
    <>
    <Hero/>
    <AIShoeAssistant/>
    <Brands/>
    <PopularProducts/>
    <Categories/>
    <BestSelling/>
    <PromoSection/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Home
