import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const authContext=createContext(null)
export const useAuth=()=>{
    return useContext(authContext)
}

export const AuthProvider=({children})=>{

    const [isAdmin,setAdmin]=useState(false)
      const Authenticate=()=>{
        setAdmin(true)
      }
    
    // useEffect(()=>{
       
    // })


    return <authContext.Provider value={{isAdmin,Authenticate}}>
        {children}
    </authContext.Provider>
}