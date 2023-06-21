import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeData from '../Components/EmployeeData'
import RestaurantData from '../Components/RestaurantData'
import CoffeeData from '../Components/CoffeeData'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/coffee-data" element={<CoffeeData/>} ></Route>
            <Route path="/restaurant-data" element={<RestaurantData/>} ></Route>
            <Route path="/employee-data" element={<EmployeeData/>} ></Route>
        </Routes>
    )
}

export {AllRoutes}
