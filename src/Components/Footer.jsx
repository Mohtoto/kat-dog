import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/trans.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-between p-12  text-[#880ED3] row hidden">
        <div className="flex items-center justify-between gap-12">
          <h2>CopyRight @2023 Kat&Dog</h2>
          <h2>Privacy Policy</h2>
          <h2>Terms of service</h2>
        </div>

        <img src={logo} className="w-[150px] object-contain" />

        <div className="flex items-center justify-between gap-12">
          <h2>
            <Link to={"/"}>Home</Link>
          </h2>
          <h2>
            <Link to={"/Contactus"}>Contact & FAQs</Link>
          </h2>
          <h2>
            <BsFacebook />
          </h2>
          <h2>
            <BsInstagram />
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
