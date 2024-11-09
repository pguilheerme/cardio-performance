import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { IoCloseSharp } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
import { motion } from "framer-motion";
import { styles } from "../styles";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full flex items-center py-5 fixed top-0 z-20 bg-white shadow-md`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-36 object-contain bg-transparent"
          />
        </Link>

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

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <IoCloseSharp color="black" size={30} />
            ) : (
              <CgMenu color="black" size={30} />
            )}
          </motion.button>
          {/* <button onClick={() => setToggle(!toggle)}>
            {toggle ? <IoCloseSharp color="black" size={30} /> : <CgMenu color="black" size={30} />}
          </button> */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl backdrop-brightness-50`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title
                      ? "border-b-2 border-redVine"
                      : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
