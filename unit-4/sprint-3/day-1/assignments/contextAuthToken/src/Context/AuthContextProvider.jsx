import React, {createContext, useState} from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {

  const [isAuth,setisAuth]=useState(false);
  const [token,settoken]=useState("")

  // const toggleIsAuth = ()=>{
  //   setisAuth(!isAuth)
  // }
  // const toggleToken = (token)=>{
  //   settoken(token)
  // }

  return (
    <div>
      <AuthContext.Provider value={{isAuth,token,settoken,setisAuth}} >
        {children}
      </AuthContext.Provider>
    </div>
  )
}
