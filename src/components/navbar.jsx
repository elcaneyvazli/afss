/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../img/logo.jpg";
import menu from "../img/menu.svg";
import close from "../img/close.svg";
import { navLinks } from "../contants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="my-[3rem] flex items-center justify-between h-[8rem]">
      <img src={logo} alt="" />
      <ul className="md:flex hidden flex-row items-center justify-between">
        {navLinks.map((nav) => (
          <li key={nav.id} className="inline-block mx-[2rem]">
            <a
              href={`#${nav.id}`}
              className="text-white text-[2rem] hover:text-secondary transition-all duration-500"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-[10rem] right-0 rounded-xl sidebar z-[70]`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="py-[1rem] px-[3rem]"
              >
                <a href={`#${nav.id}`} className="text-primary text-[2rem] hover:text-white transition-all duration-500 font-normal">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
