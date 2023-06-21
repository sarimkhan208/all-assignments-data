
import { useContext } from "react"
import { AuthContext } from "../context/authContext"

export default function Login(){

    const {login,isAuth,logout} = useContext(AuthContext)

    return <>
    <h1>Login here</h1>
    <button onClick={login} >Login</button>
    <button onClick={logout} >Logout</button>
    <h3>Login : {isAuth?"Successfull":"Unsuccesfull"}</h3>
    </>
}