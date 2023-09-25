import React, { useState } from 'react'
import main_img from "../assets/Photos/1.jpg";
import walk from "../assets/icons/walk.png";
import home from "../assets/icons/home.png";
import food from "../assets/icons/food.png";
import dog from "../assets/icons/dog.png";
import sub_img from "../assets/Photos/2.png";
import { testimonials } from '../../data'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "./Slider";

const LandingPage = () => {
  // var settings = {
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
   
  //   slidesToScroll: 1
  // };


  return (
    <section className='row p-8'>

      
      <div className="md:container">
        <div className="main__image--wrapper">
          <img src={main_img} className=" object-contain" />
          <h2 className=' absolute top-[70%] left-[12px] text-white px-[8px] py-[8px] text-[12px] rounded-xl md:top-[80%] md:left-12 md:px-[40px] md:py-[20px] md:text-[20px]'>Woofs, Walks & Talks</h2>
        </div>

        <div className="main_page_info">
          <h1 className='text-[20px] md:text-[32px]'>Trusted and reliable service in your area!</h1>
          <h2 className='md:text-[20px]'>Services offered</h2>
        </div>
        <div class="divider"></div>

        <div className="flex flex-col items-center">
          <div className="icons flex flex-col items-center  gap-4 ml-8  md:flex-row ">
            <div className="icons-left">
              <div className="icon-wrapper">
                <img src={walk} />
                <h3>Dog Walking</h3>
              </div>
              <div className="icon-wrapper my-8 ">
                <img src={home} />
                <h3>Short-Term Pet Sitting</h3>
              </div>
              <div className="icon-wrapper">
                <img src={home} />
                <h3>Home Visits</h3>
              </div>
            </div>
            <div className="icons-right">
              <div className="icon-wrapper">
                <img src={dog} />
                <h3>Pet Outings</h3>
              </div>
              <div className="icon-wrapper my-8 ">
                <img src={food} />
                <h3>Pet Taxi</h3>
              </div>
              <div className="icon-wrapper">
                <img src={home} />
                <h3>Medical Administration</h3>
              </div>
            </div>
          </div>

          <img
            src={sub_img}
            className="border-2 border-blue-500 object-contain w-[300px]"
          />

          <div className="mt-8">
            <h1 className="uppercase text-xl">testimonials</h1>
          </div>
        </div>
        <div class="divider"></div>
       

         {/* testonminals */}
     
        

         <Slider />
     


   
   





  
        </div>
      
    </section>
  )
}

export default LandingPage