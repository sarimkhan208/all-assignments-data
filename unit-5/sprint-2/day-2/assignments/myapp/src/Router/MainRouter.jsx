
import {Route , Routes} from 'react-router-dom'
import DisplayTodos from '../Pages/DisplayTodos'
import Home from '../Pages/Home'

export default function MainRouter(){
    return <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/todo' element={<DisplayTodos/>} ></Route>
    </Routes>
}