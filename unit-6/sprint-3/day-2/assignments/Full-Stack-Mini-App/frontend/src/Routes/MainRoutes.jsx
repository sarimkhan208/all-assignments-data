import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Avengers from '../pages/Avengers'
import FrontPage from '../pages/FrontPage'
import Login from '../pages/Login'
import Register from '../pages/Register'
const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<FrontPage/>} > </Route>
      <Route path='/avengers' element={<Avengers/>}></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/register' element={<Register/>} ></Route>
    </Routes>
  )
}

export default MainRoutes
