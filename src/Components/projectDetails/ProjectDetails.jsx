import React from "react";
import projectImg from "../../assets/blog-2.jpg";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";

function ProjectDetails() {
    const location=useLocation()
    const {projectId}=location.state||{}
    

//add project
const addProject=async()=>{
 

    
}
//edit project

const editProject=async ()=>{

}

const {values,errors,touched, handleBlur,handleSubmit, handleChange,getFieldProps}=useFormik({
  initialValues:{
    title:'',
    projectType:'',
    description:'',

  },
  onSubmit: () => {
    console.log(values);
  },
})





  return (
    <div>
      <div
        className="hero h-[100vh] from-amber-100 via-rose-300 to-red-500 bg-gradient-to-br
    "
      >
        <div className="heading mx-auto text-center pt-20">
          <h1 className="mx-auto  text-center sm:text-4xl text-3xl font-bold">
            {projectId?"Edit Project":"Add New Project"}
          </h1>
        </div>
        <div className="form-portion bg-sky-100 sm:w-[80%] w-[90%] mx-auto rounded-3xl  ">
          <form className="p-5 mt-5" onSubmit={handleSubmit}>
           <div className="flex md:flex-row flex-col md:justify-center md:items-center md:p-5 gap-5 ">
           <div className="md:mt-1 mt-2 md:flex-1 grid place-content-center  ">
              <label for="subject" className="text-xl font-bold">
                Image :{" "}
              </label>
              <br />
              <img
                className="  w-[300px] h-[300px] rounded-xl border-2 border-solid border-black object-cover shadow-xl shadow-black"
                src={projectImg}
              />
            </div>
            <div className="initials flex  md:flex-col flex-col md:flex-1 gap-5   ">
              <label for="title" className="text-xl font-bold md:mb-0 mb-1">
                Title :{" "}
              </label>
              <input
                type="text"
                name="title"
                id=""
                placeholder="enter title here"
                className=" w-1/1 px-4 py-4 md:mb-0 mb-3 rounded-xl"
                {...getFieldProps("title")}
              />

              <label for="projectType" className="text-xl font-bold md:mb-0 mb-1">
                Project type :{" "}
              </label>
              <select
                name="projectType"
                id=""
                className=" w-1/1 px-4 py-4 rounded-xl"
                {...getFieldProps("projectType")}
              >
                <option>Website</option>
                <option>WebApps</option>
                <option>MobileApps</option>
                <option>ComputerSoftware</option>
              </select>
            </div>
           </div>
            <div className="md:p-5 p-1 sm:mt-1 mt-1">
              <div className="mt-5">
                <label for="description" className="text-xl font-bold">
                  Description{" "}
                </label>
                <br />
                <textarea
                  name="description"
                  rows="5"
                  placeholder="Write project description here"
                  className="w-[100%] px-4 py-2 rounded-xl appearance-none text-heading text-md"
                  autoComplete="off"
                  spellCheck="false"
                  {...getFieldProps("description")}
                ></textarea>
              </div>
            </div>
            <div className="btn mt-2 w-[100%] bg-transparent flex items-center">
              <button
                type="submit"
                className="px-4 py-2 mx-auto rounded-xl text-center text-xl bg-black text-white hover:text-black hover:bg-white hover:font-bold hover:shadow-xl"
                onClick={projectId?editProject:addProject}
              >
                {projectId?"Save Project":"Add Project"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
