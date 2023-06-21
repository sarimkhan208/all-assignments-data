import { Routes , Route } from "react-router-dom";
import Home from './Home'
import Dashboard from './Dashboard'
import Login from './Login'
import SingleRestaurantPage from './SingleRestaurantPage'
import PrivateRoute from "../Components/PrivateRoute";


function AllRoutes() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="./restaurant/:id" element={<PrivateRoute><SingleRestaurantPage/></PrivateRoute>} ></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
