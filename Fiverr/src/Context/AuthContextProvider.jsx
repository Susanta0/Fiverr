import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvaider =({children})=>{

    
    // console.log(children);
    const [authState, setAuthState]=useState({
        token:null,
        isAuth:false
    })

    const login = (token)=>{
        setAuthState({
            token,
            isAuth: true
        })
    }

    const logout=()=>{
        setAuthState({
            token:null,
            isAuth:false
        })
    }
   
    return(
        <AuthContext.Provider value={{authState,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}