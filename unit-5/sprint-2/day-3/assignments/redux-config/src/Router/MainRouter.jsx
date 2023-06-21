import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import PrivateRoute from './PrivateRoute'

export default function MainRoute(){
    return <Routes>
        <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
    </Routes>
}