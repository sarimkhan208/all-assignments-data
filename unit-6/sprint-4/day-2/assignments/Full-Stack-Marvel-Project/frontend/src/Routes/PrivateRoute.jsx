import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { Navigate, useNavigate } from "react-router-dom"

export const PrivateRoute = ({child})=>{
    const {isAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    if(isAuth){
        return child
    }else{
        alert("please login first")
        return <Navigate to='signin' />
    }
}