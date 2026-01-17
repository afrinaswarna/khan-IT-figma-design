import React from "react";
import navImg from '../assets/Layer_1.png'
import { NavLink } from "react-router";
import { FaPhone } from "react-icons/fa6";
const Navbar = () => {
  const navStyles = ({ isActive }) =>
    `  text-sm flex items-center h-full ${
      isActive
        ? "text-[#0271E8]"
        : "text-[#060606] "
    }`;
  return (
    <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between p-4">
      <div>
        <img src={navImg} alt="" className="w-54 h-11 object-cover" />
      </div>
      <div>
        <ul className="flex gap-6">
          <li>
            <NavLink to="/" className={navStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navStyles}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn-primary flex items-center gap-2"><FaPhone className="text-white" /><span>+8801404282727</span></button>
      </div>
    </div>
  );
};

export default Navbar;
