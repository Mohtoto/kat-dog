import React from "react";
import pic from "../assets/Photos/3.jpg";
import { howDidWeComeAbout } from "../../data";

const Aboutus = () => {
  return (

    <main className="row ">
      <section className="mt-[50px]">
        <div className="flex items-center gap-7">
          <div className="relative flex mr-[30px]">
            <div className=" absolute -left-8 transform rotate-[60deg] opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#880ED3] rounded-2xl"></div>
            <div className="opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#880ED3] rounded-2xl"></div>
            <div className="absolute transform rotate-[50deg] -right-8 opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#880ED3] rounded-2xl"></div>
          </div>
          <h1 className="text-[20px]"> Hello and welcome to Kat&Dog!</h1>
        </div>
        <div className="flex items-center gap-12 mt-11">
          <img
            src={pic}
            className=" w-[180px]  object-contain rounded-[20px]"
          />

          <div className="flex flex-col gap-6">
            <p>
              I’m Kat, the founder of Kat&Dog, a dog walking business built from
              scratch which is ever growing and expanding. My journey as a
              business owner started in early 2022, when I was working in a
              stable but monotonous job and felt a constant yearning for more…
              something bigger!{" "}
            </p>
            <p>
              My dream was to start my own business, and my love of dogs was my
              drive. For me, like most others, job stability was not a want but
              a must, however I knew if I wanted to make my dream a reality, I
              would have to step out of my comfort zone. With a sense of
              determination, I was not only wiling, but wanting to risk it all-
              in the name of dogs!
            </p>
            <p>
              Almost two years later, I have worked with an extensive range of
              clients and breeds which has allowed me to develop ongoing
              relationships with my regular clients. I’m proud to say I have a
              stable clientele base and I’m doing what I love most.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[100px]">
        <div className="flex items-center gap-7">
          <div className="relative flex mr-[30px]">
            <div className=" absolute -left-8 transform rotate-[60deg] opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#93C98C] rounded-2xl"></div>
            <div className="opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#93C98C] rounded-2xl"></div>
            <div className="absolute transform rotate-[50deg] -right-8 opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#93C98C] rounded-2xl"></div>
          </div>
          <h1 className="text-[20px]">How did we come about?</h1>
        </div>


        <div className="flex items-center mt-[50px]">

              <h1 className=" font-bold text-[40px] text-black mr-8">2022</h1>
            <div className="flex gap-8 mt-7 ">
              {howDidWeComeAbout.map(({ image , description } , index )=> (
                
                  <div className="flex flex-col items-left gap-5" key={index}>
                        <img src={image} className='w-[200px] h-[250px] rounded-lg'/>
                        <p className="text-[12px] max-w-sm text-left">{description}</p>
                  </div>
              ))}
            </div>
              <h1 className="font-bold text-[40px] text-black">2023</h1>
        </div>
      </section>
    </main>

   
  );
};

export default Aboutus;
