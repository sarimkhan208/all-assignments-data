import React from 'react'
import { Routes , Route } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import AllProducts from '../Pages/Products'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path='/contact' element={<Contact/>} ></Route>
                <Route path='/about' element={<About/>} ></Route>
                <Route path='/login' element={<Login/>} ></Route>
                <Route path='/products' element={<PrivateRoute><AllProducts/></PrivateRoute>} ></Route>
            </Routes>
        </div>
    )
}

export {AllRoutes}