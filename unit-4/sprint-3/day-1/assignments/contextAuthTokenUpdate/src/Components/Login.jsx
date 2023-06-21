
import { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import {Dashboard} from './Dashboard'

export default function Login() {

    const {isAuth,token,setToken,login} = useContext(AuthContext)
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch('https://reqres.in/api/login',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(obj)
        })
        .then((res)=>res.json())
        .then((res)=>{
            setToken(res.token)
            login()

        })
        .catch((err)=>console.log(err))
    }
    let obj = {email:email,password:password};

    if(isAuth){
        return <Dashboard/>
    }

    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleSubmit} >
                <input value={email} onChange={(e)=>setEmail(e.target.value)}
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"

                    
                />
                <br />
                <input value={password} onChange={(e)=>setPassword(e.target.value)}
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}
