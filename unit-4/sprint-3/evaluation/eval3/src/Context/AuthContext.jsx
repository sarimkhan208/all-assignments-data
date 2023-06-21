import { createContext, useState } from "react";

export const AuthContext = createContext()



function AuthContextProvider({children}) {


    const [isAuth,setAuth] = useState(false)
    const [token,setToken] = useState(null)

    const login = (token)=>{
        setToken(token)
        setAuth(true)
    }
    const logout = ()=>{
        setToken("")
        setAuth(false)
    }

    return <AuthContext.Provider value={{isAuth,login,logout,token,setAuth}} >
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;
