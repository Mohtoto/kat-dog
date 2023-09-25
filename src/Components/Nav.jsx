import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo/trans.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlClose } from "react-icons/sl";
import useMediaQuery from "../hooks/useMediaQuery";
import {AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");






  return (
    <nav className="shadow-md">
     
      <div className="w-full max-w-[1200px] flex items-center m-auto p-[18px]">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[100px] object-contain" />
        </Link>
        {isAboveMediumScreens ? (
          <ul className="main__list ">
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "text-[#880ED3]" : ""}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/aboutus"
                className={
                  location.pathname === "/aboutus" ? "text-[#880ED3]" : ""
                }
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/Gallery"
                className={
                  location.pathname === "/Gallery" ? "text-[#880ED3]" : ""
                }
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                to="/EnquiryForm"
                className={
                  location.pathname === "/EnquiryForm" ? "text-[#880ED3]" : ""
                }
              >
                Enquiry Form
              </Link>
            </li>

            <li>
              <Link
                to="/Contactus"
                className={
                  location.pathname === "/Contactus" ? "text-[#880ED3]" : ""
                }
              >
                Contact & FAQs
              </Link>
            </li>
          </ul>
        ) : (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <GiHamburgerMenu className="h-6 w-6 text-black absolute right-4 top-8" />
          </button>
        )}
      </div>
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div
           initial="hidden"
          whileInView="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 100 }, 
          }}

        className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-[whitesmoke] drop-shadow-xl ">
          <div className="flex justify-end p-12 ">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <SlClose className="h-6 w-6 text-black" />
            </button>
          </div>

          <motion.ul 
          
          className="flex flex-col absolute top-1/2 left-1/2 transfom -translate-x-1/2 -translate-y-1/2 gap-12 text-center">
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "text-[#880ED3]" : ""}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/aboutus"
                className={
                  location.pathname === "/aboutus" ? "text-[#880ED3]" : ""
                }
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/Gallery"
                className={
                  location.pathname === "/Gallery" ? "text-[#880ED3]" : ""
                }
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                to="/EnquiryForm"
                className={
                  location.pathname === "/EnquiryForm" ? "text-[#880ED3]" : ""
                }
              >
                Enquiry Form
              </Link>
            </li>

            <li>
              <Link
                to="/Contactus"
                className={
                  location.pathname === "/Contactus" ? "text-[#880ED3]" : ""
                }
              >
                Contact & FAQs
              </Link>
            </li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
    </nav>
  );
};

export default Nav;
