import { useContext, useState } from "react";
import {Link, Navigate} from 'react-router-dom'
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const {token,login,isAuth,setAuth} = useContext(AuthContext)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  const handleSubmit = (e)=>{
    let obj = {email:email,password:password}
    e.preventDefault()
    fetch(`https://reqres.in/api/login`,{
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
      login(data.token)
      
    })
  } 
  if(isAuth){
    return <Navigate to='/dashboard'/>
  }









  return (
    <div>
      <form data-testid="login-form" onSubmit={handleSubmit} >
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
