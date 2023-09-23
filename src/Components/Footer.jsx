import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/trans.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-center md:justify-between p-8 text-[#880ED3]  ">
        <div className="lg:flex items-center justify-between text-[8px] md:text-[18px] gap-12 hidden sm:hidden">
          <h2>CopyRight @2023 Kat&Dog</h2>
          <h2>Privacy Policy</h2>
          <h2>Terms of service</h2>
        </div>

        <img src={logo} className="w-[70px] md:w-[150px]  object-contain md:mr-[100px]" />

        <div className="flex items-center text-[12px] mt-4 gap-4 md:gap-12 md:text-[18px]">
          <h2>
            <Link to={"/"}>Home</Link>
          </h2>
          <h2>
            <Link to={"/Contactus"}>Contact & FAQs</Link>
          </h2>
          <a  target={'_blank'} href="https://www.facebook.com/profile.php?id=100083093993005">
                <BsFacebook />
          </a>
          <a target={'_blank'} href="https://www.instagram.com/katanddogwalking/">
            <BsInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;