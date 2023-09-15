import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo/trans.png";

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="shadow-md">
      <div className="navbar">
        <Link to="/">
          <img src={logo} />
        </Link>

        <ul className="main__list">
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
      </div>
    </nav>
  );
};

export default Nav;
