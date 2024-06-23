import { Route, Routes } from "react-router-dom"
import AppIndex from "./AppFor/AppIndex"
import Login from "./Auth/Login"
<<<<<<< HEAD
import Category from "./Components/Category"



=======
import Category from "./pages/Category"
import Notifications from "./pages/Notifications"
import Tanlanganlar from "./Tanlanganlar/Tanlanganlar"
>>>>>>> 2883949b09d1d0717dd9f24c463577ae6cd58f2c

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<AppIndex/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/category" element={<Category/>} />
<<<<<<< HEAD
=======
        <Route path="/tanlanganlar" element={<Tanlanganlar/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
>>>>>>> 2883949b09d1d0717dd9f24c463577ae6cd58f2c
      </Routes>
    </div>
  )
};





export default App



