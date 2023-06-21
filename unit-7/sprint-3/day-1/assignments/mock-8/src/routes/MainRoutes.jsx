import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Forumpage from '../pages/Forumpage'
import PrivateRoute from './PrivateRoute'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoute><Forumpage/></PrivateRoute>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
    </Routes>
  )
}

export default MainRoutes
