import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../Redux/AuthReducer/action"

import styled  from 'styled-components'
import { useLocation, useNavigate } from "react-router-dom"

export default function Login(){
    const dispatch = useDispatch()
    const {isAuth} = useSelector((state)=>state.authReducer)
    const location = useLocation()
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    
    

    const handleSubmit = (e)=>{
        e.preventDefault()

        dispatch(login(email,password)).then(()=>{
            navigate(location.state , {replace:true})
        })
        setEmail("")
        setPassword("")
    }
    return <DIV isAuth={isAuth} >
        <h1>User Login</h1>
        <h3>{isAuth?"Login Successfull":"Enter Your Credential"}</h3>
        <form onSubmit={handleSubmit} >
            <input type='email' placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
            <input type='text' value={password} placeholder='password' onChange={(e)=>setPassword(e.target.value)} /><br/>
            <input type='submit' value='submit' />
        </form>
    </DIV>
}



const DIV = styled.div`
    width: 400px;
    margin: 40px auto;
    border : 1px solid black;
    padding: 20px;

    input{
        width: 80%;
        height: 40px;
        font-size: large;
    }

    button{
        width: 20%;
        height: 35px;
    }

    h3{
        color : ${({isAuth})=>isAuth?'green':'red'} ;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }

`


