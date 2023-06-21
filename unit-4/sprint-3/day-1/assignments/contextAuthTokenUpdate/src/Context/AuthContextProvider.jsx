import React, {createContext, useState} from 'react'

export const AuthContext = createContext()


export default function AuthContextProvider({children}) {

  const [isAuth,setIstAuth] = useState(false);
  const [token,setToken] = useState("")
  const login = ()=>{
    setIstAuth(true)
  }
  const logout = ()=>{
    setIstAuth(false)
  }
  return (
    <AuthContext.Provider value={{isAuth,login,logout,token,setToken}} > 
      {children}
    </AuthContext.Provider>

  )
}
