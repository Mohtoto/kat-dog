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

  const onSubmit = async (e) => {
    const inValid = await trigger();
    setSent(true);

    if (!inValid) {
      e.preventDefault();

    }
    
  };

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-grey placeholder:opacity-50`;

  return (
    <>
      {sent ? (
        <ConfirmationPage />
      ) : (
        <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/mohtotonchy77@gmail.com"
            >
              {/* ------------------------------------------ */}
              <input
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
                className={inputStyles}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && " this field is required"}
                  {errors.name.type === "maxLength" &&
                    " Max length is 100 characters"}
                </p>
              )}

              {/* ------------------------------------------ */}
              <input
                type="text"
                placeholder="EMAIL"
                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })}
                className={inputStyles}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && " this field is required"}
                  {errors.email.type === "pattern" &&
                    "invalid email address"}
                </p>
              )}

              {/* ------------------------------------------ */}
              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
      )}
    </>
  );
};

export default EnquiryForm;
