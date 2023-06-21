import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export const Dashboard = () => {
    const {token,settoken,setisAuth,seterror}=useContext(AuthContext)
    const handleclick=()=>{
        settoken("")
        setisAuth(false)
    }
    return (
        <div >
            <h3 data-testid = "token" >Token:{token} </h3>
            <button data-testid = "logout" onClick={handleclick} >LOGOUT</button>
        </div>
    )
}
