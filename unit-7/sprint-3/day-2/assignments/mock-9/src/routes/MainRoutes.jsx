import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<Dashboard/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
    </Routes>
  )
}

export default MainRoutes
