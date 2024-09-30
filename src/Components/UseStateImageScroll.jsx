import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function UseStateImageScroll() {

  const [val, setVal] = useState(false);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-32 w-60 flex relative overflow-hidden">
        {/* ek baar bina overflow-hidden ke bhi try krna */}
        <img
          className={`shrink-0 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} duration-1000 w-full h-full rounded-md object-cover`}
          src="https://images.unsplash.com/photo-1471107191679-f26174d2d41e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D"
          alt="Image 1" />

        <img
          className={`shrink-0 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} duration-1000 w-full h-full rounded-md object-cover`}
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZHl8ZW58MHx8MHx8fDA%3D"
          alt="Image 1" />

         <span onClick={()=> setVal(()=> !val)}  
         className="absolute bg-[#dadada7b] w-8 h-8 flex justify-center items-center rounded-lg left-1/2  bottom-1 -translate-x-[50%] -translate-y-[50%] cursor-pointer">
          <FaArrowRight />    
        </span> 
      </div>
    </div>
  );
}

export default UseStateImageScroll;
