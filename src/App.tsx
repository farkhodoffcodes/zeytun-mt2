import { Route, Routes } from "react-router-dom"
import AppIndex from "./AppFor/AppIndex"
import Login from "./Auth/Login"
import Product from "./Components/Product"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppIndex/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Product />
    </div>
  )
}

export default App
