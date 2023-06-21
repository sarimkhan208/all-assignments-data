import { Routes , Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import User from "../pages/user";
import Contact from "../pages/contact";
import About from "../pages/about";
import UserPage from "../pages/userPage";
import PrivateRoute from "../context/privateRoute";

function AllRouters(){
        return <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<PrivateRoute><About/></PrivateRoute>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/user" element={<PrivateRoute><User/></PrivateRoute>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/user/:user_id" element={<UserPage/>}></Route>
        </Routes>
    </>
}
export default AllRouters