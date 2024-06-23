import { Link } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Hero from "../Components/Hero"
import Product from "../Components/Products"
import Category from "../Components/Category"

const AppIndex = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Product/>
      <Footer/>
    </div>
  )
}

export default AppIndex
