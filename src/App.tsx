import { Route, Routes } from "react-router-dom"
import AppIndex from "./AppFor/AppIndex"
import Login from "./Auth/Login"
import Category from "./pages/Category"
import Notifications from "./pages/Notifications"
import Tanlanganlar from "./Tanlanganlar/Tanlanganlar"

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<AppIndex/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/tanlanganlar" element={<Tanlanganlar/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
      </Routes>
    </div>
  )
}

export default App
