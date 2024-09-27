import React, { useEffect, useState } from "react";
import "./resentWork.css";
import img1 from "../assets/project-1.jpg";
import img3 from "../assets/project-3.jpg";
import img2 from "../assets/project-2.jpg";
import img4 from "../assets/project-4.jpg";
import { useAuth } from "../context/auth-context";

function ResentWork() {
  const {isAdmin}=useAuth()
  const handleButton = (e) => {
    const ind = document.querySelector(".indicator");
    const button = e.target;
    const category = button.id;
    const rect = button.getBoundingClientRect();
    ind.style.left=rect.left
    ind.innerText=button.innerText
    ind.style.width = rect.width + "px";
    ind.style.transform = `translateX(${button.offsetLeft}px)`;

    document.querySelectorAll(".card").forEach((card) => {
      if (card.classList.contains(category) === true) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  };

  return (
    <>
      <div className="grid  p-2  " id="recentWorkSection">
      <div className="section-header mt-10">
  <h1
    className="
      text-xl            /* Default for 250px screens */
      font-bold 
      font-sans
      sm:text-2xl        /* Screen size >= 425px */
      md:text-3xl        /* Screen size >= 763px */
      lg:text-4xl        /* Screen size >= 1024px */
      xl:text-5xl        /* Screen size >= 1440px */
      ExtraLarge:text-8xl /* Screen size >= 2560px */
      ExtraLarge:p-5 
    "
  >
      My Recent Works
  </h1>
  <p
    className="
      text-xs           /* Default for 250px screens */
      w-[90%]  
      mb-4 
      text-justify
      tracking-wider
      text-white p-2
      sm:text-sm         /* Screen size >= 425px */
      sm:w-[85%]
      md:w-[75%]         /* Screen size >= 763px */
      md:text-base
      md:p-5
      lg:w-[60%]         /* Screen size >= 1024px */
      lg:text-lg
      lg:p-8
      xl:text-xl         /* Screen size >= 1440px */
      xl:mx-12
      ExtraLarge:text-2xl /* Screen size >= 2560px */
      ExtraLarge:px-14
    "
  >
    We transform your ideas and desires into a distinctive web project that inspires both you and your customers.
  </p>
</div>


          <div className=" relative  w-[95%] md:w-max mx-auto my-10 h-12 exs:max-sm:h-10  text-xs grid grid-cols-4 items-center px-[3px] rounded-full bg-blue-600  border border-primaryColor transition md:h-14 md:text-base
          mb-5">
            {/* <!-- indicator --> */}

            <button
              onClick={handleButton}
              id="card"
              className="btn tab  block px-3 rounded-full h-[100%] md:px-6 text-white "
              data-tabs="all"
            >
              All
            </button>
            <button
              onClick={handleButton}
              id="card_ui"
              className="btn tab  block px-3 rounded-full h-[100%] md:px-6 text-white "
              data-tabs="uiux"
            >
              UI/UX
            </button>
            <button
              onClick={handleButton}
              id="card_ew"
              className="btn tab block px-3 rounded-full h-[100%] md:px-6  text-white "
              data-tabs="branding"
            >
              Branding
            </button>
            <button
              onClick={handleButton}
              id="card_sw"
              className="btn tab block px-3 rounded-full h-[100%] md:px-6 text-white"
              data-tabs="apps"
            >
              Apps
            </button>
            <div className="indicator top-0 left-0 absolute h-[100%] w-[20%] grid place-items-center bg-blue-500 rounded-full  duration-300 text-[aqua] ">All</div>
          </div>
        </div>
        <div className=" scrolling-container   whitespace-nowrap   ">
          <div className="card card_p inline-block lg:w-[31%] md:w-[48%] sm:w-[96%]  bg-white shadow-lg rounded-lg  mx-2  my-4 lg:mx-3 xl:mx-4">
            <div className="p-4 cardImg">
              <h2 className="text-xl font-bold">Project 1</h2>
              <img src={img1} alt="img" />
              <p className="text-gray-600">Description of Project 1</p>
              <div className="cardTitle">Description of Project 1</div>
              {isAdmin&&<button>Edit</button>}
            </div>
          </div>
          <div className="card card_ui inline-block lg:w-[31%] md:w-[48%] sm:w-[96%] bg-white shadow-lg rounded-lg mx-2 my-4 lg:mx-3 xl:mx-4">
            <div className="p-4 cardImg">
              <h2 className="text-xl font-bold">UI Design 1</h2>
              <img src={img2} alt="img" />
              <p className="text-gray-600">Description of UI Design 1</p>
              <div className="cardTitle">Description of Project 1</div>
            </div>
          </div>
          <div className="card card_ew inline-block lg:w-[31%] md:w-[48%] sm:w-[96%]  bg-white shadow-lg rounded-lg mx-2 my-4 lg:mx-3 xl:mx-4">
            <div className="p-4 cardImg">
              <h2 className="text-xl font-bold">Ecommerce 1</h2>
              <img src={img3} alt="img" />
              <p className="text-gray-600">Description of Ecommerce 1</p>
              <div className="cardTitle">Description of Project 1</div>
            </div>
          </div>
          <div className="card card_sw inline-block lg:w-[31%] md:w-[48%] sm:w-[96%] bg-white shadow-lg rounded-lg mx-2 my-4 lg:mx-3 xl:mx-4">
            <div className="p-4 cardImg">
              <h2 className="text-xl font-bold">Social Web 1</h2>
              <img src={img4} alt="img" />
              <p className="text-gray-600">Description of Social Web 1</p>
              <div className="cardTitle">Description of Project 1</div>
            </div>
          </div>

          <div className="card   card_p inline-block lg:w-[31%] md:w-[48%] sm:w-[96%] bg-white shadow-lg rounded-lg mx-2 my-4 lg:mx-3 xl:mx-4">
            <div className="p-4 cardImg">
              <h2 className="text-xl font-bold">Project 1</h2>
              <img src={img1} alt="img" />
              <p className="text-gray-600">Description of Project 1</p>
              <div className="cardTitle">Description of Project 1</div>
            </div>
          </div>
          <div className="card card_ui inline-block lg:w-[31%] md:w-[48%] sm:w-[96%] bg-white shadow-lg rounded-lg mx-2 my-4 lg:mx-3 xl:mx-4">
            <div className="p-4 cardImg">
              <h2 className="text-xl font-bold">UI Design 1</h2>
              <img src={img3} alt="img" />
              <p className="text-gray-600">Description of UI Design 1</p>
              <div className="cardTitle">Description of Project 1</div>
            </div>
          </div>
          <div className="card card_ew inline-block lg:w-[31%] md:w-[48%] sm:w-[96%] bg-white shadow-lg rounded-lg mx-2 my-4 lg:mx-3 xl:mx-4">
            <div className="p-4 cardImg">
              <h2 className="text-xl font-bold">Ecommerce 1</h2>
              <img src={img2} alt="img" />
              <p className="text-gray-600">Description of Ecommerce 1</p>
              <div className="cardTitle">Description of Project 1</div>
            </div>
          </div>
          <div className="card card_sw inline-block lg:w-[31%] md:w-[48%] sm:w-[96%] bg-white shadow-lg rounded-lg mx-2 my-4 lg:mx-3 xl:mx-4">
            <div className="p-4 cardImg">
              <h2 className="text-xl font-bold">Social Web 1</h2>
              <img src={img3} alt="img" />
              <p className="text-gray-600">Description of Social Web 1</p>
              <div className="cardTitle">Description of Project 1</div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default ResentWork;
