import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

const EnquiryForm = () => {

  const [sending, setSending] = useState(true)
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const inValid = await trigger();

    if (!inValid) {
      e.preventDefault();
    }
  };

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-grey placeholder:opacity-50`;

  return (
    <form
      target="_blank"
      onSubmit={onSubmit}
      method="POST"
      action="mohtotonchy@gmail.com"
    >
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
                />
              </div>
            </div>
            {/*  second row inputs  */}
            <div className="flex items-center justify-evenly w-full">
              <div className="w-[250px]">
                <label>
                  Pet Name? <span>*️</span>
                </label>
                <input type="text" className={inputStyles} placeholder="Max" />
              </div>
              <div className="w-[250px]">
                <label>
                  Pet Age? <span>*️</span>
                </label>
                <input type="text" className={inputStyles} placeholder="2" />
              </div>
              <div className="w-[250px]">
                <label>
                  Breed? <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  placeholder="Husky"
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
                  placeholder="04/12/2023"
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
                />
              </div>

              <div className="w-[250px]">
                <label>Please list services required?</label>
                <textarea
                  type="text"
                  className={inputStyles}
                  placeholder="Type here..."
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
                  id="fileInput"
                  name="attachment"
                  className="border rounded p-2"
                />
              </div>
              <button
                type="submit"
                className=" w-full bg-[#6C3E2E] hover:bg-brown-700 text-white font-bold py-2 px-4 rounded"
              >
                {sending ? 'sending...' : 'submit' }
              </button>
            </div>
            {/* <div class="w-1/4">
              <input
                type="text"
                className={inputStyles}
                placeholder="Input 5"
              />
            </div>
            <div class="w-1/4">
              <input
                type="text"
                className={inputStyles}
                placeholder="Input 6"
              />
            </div>
            <div class="w-1/4">
              <input
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
                placeholder="Input 7"
              />
            </div>
            <div className="flex flex-col items-center w-full">
              <label>Sex</label>
              <div className="flex justify-between">
                <input type="radio" placeholder="Input 7" />
                <input type="radio" placeholder="Input 7" />
              </div>
            </div>
            <div class="w-1/4">
              <input
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
                placeholder="Input 8"
              />
            </div>
            <div class="w-1/4">
              <input
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
                placeholder="Input 9"
              />
            </div>
            <div class="w-1/4">
              <input
                type="text"
                class="w-full p-2 border border-gray-300 rounded"
                placeholder="Input 10"
              />
            </div> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default EnquiryForm;
