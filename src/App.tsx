import { Route, Routes } from "react-router-dom"
import AppIndex from "./AppFor/AppIndex"
import Login from "./Auth/Login"
import Category from "./Components/Category"




const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<AppIndex/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
      
    </div>
  )
};





export default App



