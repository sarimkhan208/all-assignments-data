import { Route , Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Registation from "../Pages/Registration";

export default function MainRoutes(){
    return <Routes>
        <Route path="/" element={<Dashboard/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/registration" element={<Registation/>} ></Route>
    </Routes>
}