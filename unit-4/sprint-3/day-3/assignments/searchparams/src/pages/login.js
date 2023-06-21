import { useContext } from "react"
import { AuthContext } from "../context/authContext"

function Login(){

    const {login,isAuth} =   useContext(AuthContext)

    return <div>
        <h1>Login Page</h1>
        <button disabled={isAuth} onClick={login}>Login</button>
    </div>
}
export default Login