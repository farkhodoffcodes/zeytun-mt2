import { Route, Routes } from "react-router-dom"
import AppIndex from "./AppFor/AppIndex"
// import Login from "./Auth/LogIn"
import Category from "./Components/Category"
import SingIn from "./Auth/SingIn";




const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<AppIndex/>} />
        {/* <Route path="/login" element={<Login/>} /> */}
        <Route path="/Singin" element={<SingIn/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    </div>
  )
};





export default App



