"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import Logo from "../brand/logo.svg";
import { navLinks } from "@/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  return (
    <div className="w-full flex items-center justify-center fixed top-0 z-20">
      <div className="flex items-center justify-between w-full lg:w-[80%] bg-white h-24 rounded-b-[16px] px-6 lg:px-9 shadow-md">
        <Link
          to={"/"}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <img
            src={Logo}
            alt="logo"
            className="w-36 object-contain bg-transparent"
          />
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? "border-b-2 border-redVine text-black"
                    : "text-black"
                } hover:text-redVine text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="lg:hidden text-gray2 text-2xl"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <FaTimes size={25} className="text-black" />
          ) : (
            <FaBars size={25} className="text-black" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute flex flex-col justify-center bg-white w-full h-[600px] p-5 space-y-10 shadow-lg top-20 mt-0 z-10">
          <ul className="list-none flex flex-col justify-center items-center gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? "border-b-2 border-redVine text-black"
                    : "text-black"
                } hover:text-redVine text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(nav.title);
                  setIsMobileMenuOpen(false);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
