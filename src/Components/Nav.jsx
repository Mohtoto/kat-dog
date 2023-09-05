import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/trans.png";

const Nav = () => {
  return (
    <section id="nav">

   
    <nav className='navbar'>

      <Link to="/">
        <img src={logo}  />
      </Link>

      <ul className="main__list">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/">
            Enquiry Form
          </Link>
        </li>
        <li>
          <Link to="/">
            Contact Us
          </Link>
        </li>
        

       
      </ul>
    </nav>
    </section>
  );
};

export default Nav;
