import React from 'react'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoutes><Dashboard/></PrivateRoutes>} ></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default MainRoutes
