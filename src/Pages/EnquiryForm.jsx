import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import ConfirmationPage from "./ConfirmationPage";
const EnquiryForm = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();


  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-grey placeholder:opacity-50`;

  return (
    <form method="POST" action="https://formsubmit.co/mohtotonchy@gmail.com">
      <div className="row">
        <div className="flex items-center gap-7 mt-16  ">
          <div className="relative flex mr-[30px]">
            <div className=" absolute -left-8 transform rotate-[60deg] opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#93C98C] rounded-2xl"></div>
            <div className="opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#93C98C] rounded-2xl"></div>
            <div className="absolute transform rotate-[50deg] -right-8 opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#93C98C] rounded-2xl"></div>
          </div>
          <div>
            <h1 className="text-[20px]">BOOKING FORM</h1>
            <h2 className="text-[#6C3E2E]">
              Please provide the following information to make a booking via
              email.
            </h2>
          </div>
        </div>

        {/*  inputs */}
        <div class="container">
          <div class="flex flex-wrap gap-8">
            <div className="flex items-center justify-evenly w-full">
              <div className="w-[250px]">
                <label>
                  Your Name: <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Full Name..."
                  {...register("Full Name", { required: true, maxLength: 100 })}
                />
              </div>
              <div className="w-[250px]">
                <label>
                  Contact Number: <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="0421302339"
                  {...register("Contact Number", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </div>
              <div className="w-[250px]">
                <label>
                  Email Address? <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="sallym@gamil.com"
                  {...register("Email Address", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </div>
              <div className="w-[250px]">
                <label>
                  Suburb? <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Morley"
                  {...register("Suburb", { required: true, maxLength: 100 })}
                />
              </div>
            </div>
            {/*  second row inputs  */}
            <div className="flex items-center justify-evenly w-full">
              <div className="w-[250px]">
                <label>
                  Pet Name? <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Max"
                  {...register("Pet Name", { required: true, maxLength: 100 })}
                />
              </div>
              <div className="w-[250px]">
                <label>
                  Pet Age? <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="2"
                  {...register("Pet Age", { required: true, maxLength: 100 })}
                />
              </div>
              <div className="w-[250px]">
                <label>
                  Breed? <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Husky"
                  {...register("Breed", { required: true, maxLength: 100 })}
                />
              </div>
              <div className="w-[250px]">
                <label>
                  Sex <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="M or F"
                  {...register("Sex", { required: true, maxLength: 100 })}
                />
              </div>
            </div>

            <div className="flex items-center justify-evenly w-full ">
              <div className="w-[250px]">
                <label>
                  Required Dates? <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="04/12/2023 to 12/12/2023"
                  {...register("Required Dates", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </div>
              <div className="w-[250px]">
                <label>
                  Frequency? <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="once or multiple"
                  {...register("Frequency", { required: true, maxLength: 100 })}
                />
              </div>
              <div className="w-[250px]">
                <label>
                  Duration? <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="eg: 1 hour"
                  {...register("Duration", { required: true, maxLength: 100 })}
                />
              </div>

              <div className="w-[250px]">
                <label>Please list services required?</label>
                <textarea
                  type="text"
                  className={inputStyles}
                  placeholder="Type here..."
                  {...register("list services", {
                    required: true,
                    maxLength: 100,
                  })}
                />
              </div>
            </div>

            <div className="w-full ml-8">
              <h1>
                Please attach a photo of your pet here.. <span>*️</span>
              </h1>
              <div class="mb-4">
                <input
                  type="file"
                  name="attachment"
                  accept="image/png, image/jpeg"
                />
              </div>
              <button
                type="submit"
                className=" w-full bg-[#6C3E2E] hover:bg-brown-700 text-white font-bold py-2 px-4 rounded"
                // onClick={() => setSent(!sent)}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <input type="hidden" name="_template" value="table"></input>
      <input
        type="hidden"
        name="_next"
        value="http://localhost:5173/ConfirmationPage"
      ></input>
      <input
        type="hidden"
        name="_redirect"
        value="http://localhost:5173/ConfirmationPage"
      />
    </form>
  );
};

export default EnquiryForm;
