import { Route, Routes } from "react-router-dom";
import Admin from "./AdminPage";
import Edit from "./Edit";
import Home from "./Home";
import Login from "./Login";
import PrivateRoutes from "./PrivateRoutes";

export default function MainRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>}  ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/admin" element={<PrivateRoutes><Admin/></PrivateRoutes>} ></Route>
        <Route path="/edit/:id" element={<Edit/>} ></Route>
        <Route path="*" element={<h1>Page Not Found!!!</h1>} ></Route>
    </Routes>
}