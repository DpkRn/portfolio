import React, { useEffect, useState } from "react";
import "./App.css";

// import Skilinf from './Components/SkilsInf'

import Nav from "./Components/Nav";
import ResentWork from "./Components/ResentWork";
import HeroSectionTwo from "./Components/HeroSectionTow";
import SkillsInfo from "./Components/SkillsInfo";
import Services from "./Components/Services";
import Education from "./Components/Education";
import Skils from "./Components/Skils";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Contect from "./Components/Contect";
import Popup from "./Components/Popup.jsx";
import Login from "./Components/Login.jsx";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/auth-context.jsx";
import axios from "axios";
import ProjectDetails from "./Components/projectDetails/ProjectDetails.jsx";
import { useProject } from "./context/project-context.jsx";


function App() {
  const [show, setShow] = useState(false);
   const {isAdmin,setAdmin,Authenticate}=useAuth()
   const {projects,setProjects}=useProject()
   console.log(useProject())
   
  

  const verifyToken = async () => {
    
    const response = await axios.get(
      "http://localhost:8080/api/auth/verify",
      { withCredentials: true }
    );
 
    if(response.status===200){
      if(response.data.success===true){
        Authenticate()
      }
    }
    
  };



  const getAllProjects=async ()=>{
    try{
      const response=await axios.get('http://localhost:8080/api/projects/getallprojects',{withCredentials:true})
      if(response.status===200){
        // console.log(response.data.projects)
        setProjects(response.data.projects)
      }
    }catch(err){
      console.log(err)
    }
  }


  useEffect(() => {
    const showValue = sessionStorage.getItem("showValue");
    if (!showValue) {
      setShow(true);
      sessionStorage.setItem("showValue", true);
    }
    verifyToken()
    getAllProjects()
  }, [isAdmin,Authenticate]);

  function UserPage() {
    return (
      <div className="relative">
        {/* <Skilinf/> */}
        {/* {show && <Popup show={show} setShow={setShow} />} */}
        <Nav />
        <HeroSectionTwo />
        <SkillsInfo />
        <Services />
        <ResentWork />
        <Education />
        <Skils />
        <Blog />
        <Contect />
        <Footer />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/admin" element={<Login />} />
      <Route path="/" element={<UserPage/>} />
      <Route path='project-details' element={<ProjectDetails/>}/>
    </Routes>
  );
}

export default App;
