import React from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export const Dashboard = () => {

    const {isAuth,token,setToken,login,logout} = useContext(AuthContext)



    return (
        <div >
            <h3 data-testid = "token" >Token: {isAuth?token:""} </h3>
            <button data-testid = "logout" onClick={logout} >LOGOUT</button>
        </div>
    )
}
