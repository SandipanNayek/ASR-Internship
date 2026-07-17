import Navbar from "./components/Navbar"
import Brands from "./components/Brands"
import Hero from "./components/Hero"
import PopularProducts from "./components/PopularProduct"
import Categories from "./components/Categories"
import BestSelling from "./components/BestSelling"
import PromoSection from "./components/PromoSection"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer"
import './App.css'

function App() {
  

  return (
    <>
    <Hero/>
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

export default App
