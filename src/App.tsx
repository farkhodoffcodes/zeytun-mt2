import { Route, Routes } from "react-router-dom"
import AppIndex from "./AppFor/AppIndex"
import Login from "./Auth/Login"
import Product from "./Components/Product"
import Category from "./pages/Category"
import Notifications from "./pages/Notifications"

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<AppIndex/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/notifications" element={<Notifications/>}/>
      </Routes>
      <Product />
    </div>
  )
}

export default App
