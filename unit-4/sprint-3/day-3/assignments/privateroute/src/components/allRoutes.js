import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Setting from "../pages/setting";
import Login from "../pages/login";
import PrivateRoute from "../context/privateRoutes";

export default function AllRoutes(){
    return <>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/setting" element={<PrivateRoute><Setting/></PrivateRoute>} ></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} ></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </>
}