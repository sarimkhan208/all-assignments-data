import { useState } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { authFalse, authTrue } from "../Redux/Login/action"
import { useNavigate } from "react-router-dom"

export default function Login(){



    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = () =>{
        let obj = {email,password}
        axios.post('https://reqres.in/api/login',obj)
        .then((res)=>{
            dispatch(authTrue(true))
            navigate('/')
        })
        .catch((err)=>dispatch(authFalse(false)))
    }

    return <div>
        <h1>Login</h1>
        <label>
            Email <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </label>
        <br/>
        <br/>
        <label>
            Password <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <br/>
        <button onClick={handleSubmit} >Submit</button>
    </div>
}