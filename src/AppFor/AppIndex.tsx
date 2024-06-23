import { Link } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Product from "../Components/Product"
import Category from "../Components/Category"

const AppIndex = () => {
  return (
    <div>
      <Header />
      <Product/>
      <Footer/>
    </div>
  )
}

export default AppIndex
