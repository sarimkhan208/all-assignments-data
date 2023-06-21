import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignupCard from './pages/Signup'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/signin' element={<Signin/>} ></Route>
        <Route path='/signup' element={<SignupCard/>} ></Route>
    </Routes>
  )
}

export default AllRoutes
