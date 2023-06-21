import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import {useNavigate} from 'react-router-dom'


export default function Login() {
    const {login,isAuth} = useContext(AuthContext)
    let navigate = useNavigate()
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate("/")
    }
    return (
        <div>
            <form className = "auth_form" onSubmit={handleSubmit} >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input className = "submit" type = "submit" onClick={login} />
            </form>  
                          
        </div>
    )
}