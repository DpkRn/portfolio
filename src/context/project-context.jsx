import { createContext, useContext, useEffect, useState } from "react";

const projectContext=createContext(null);
export const useProject=()=>{
    return useContext(projectContext);
}
export const ProjectContextProvider=({children})=>{
    const [projects,setProjects]=useState([])

    useEffect(()=>{
console.log(projects)
    },[projects])
    

    return <projectContext.Provider value={{projects,setProjects}}>
        {children}
    </projectContext.Provider>
}