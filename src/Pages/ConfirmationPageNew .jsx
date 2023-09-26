import React from "react";
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";
const ConfirmationPageNew = () => {


  return (
    <section className="w-full m-auto max-w-7xl">
      <div className="row">
        <div className=" flex items-center justify-center min-h-[calc(100vh-81px-187px)]">
          <div className="flex items-center justify-center relative ">
            <div className="lg:w-[300px] lg:h-[300px] rounded-lg bg-[#f3c1c1] rotate-[50deg] absolute w-[250px] h-[250px]"></div>
            <div className="lg:w-[300px] lg:h-[300px] bg-[#F59A9A] rounded-lg rotate-[50deg] absolute -top-38 -left-28 w-[250px] h-[250px]">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center -rotate-[50deg] w-full flex flex-col gap-4">
                <h1 className="text-black">CONFIRMATION</h1>
                <p className="text-white text-sm">
                  Thank you for getting in touch.We will get back to you as soon
                  as we can.
                </p>

               
              </div>
            </div>
          </div>
        </div>

         <div className="flex items-center gap-2">
            <Link to={'/'}><IoIosArrowBack  className="mb-4 text-[#6C3E2E] text-[32px]"/></Link>
            <h1 className="mb-4">Return Home</h1>
         </div> 
      </div>
    </section>
  );
};

export default ConfirmationPageNew;
