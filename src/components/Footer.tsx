"use client";
import Logo from "@/brand/logo.svg";
import { navLinks } from "@/constants";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className={`w-full bg-white lg:h-[400px]
       flex justify-center items-center`}
    >
      <div className="lg:w-[80%] w-[90%] justify-evenly flex flex-col lg:py-0 py-16">
        <div className="flex lg:flex-row flex-col justify-between lg:items-center last:items-center lg:gap-0 gap-10 mb-10">
          <div className="flex flex-col justify-center items-center">
            <img
              src={Logo}
              alt="NevesJr Logo"
              className="w-[266px] h-[72px] object-contain"
            />
            <p className=" text-black font-light text-xs">
              Informando e conscientizando sobre os <br /> riscos das doenças
              cardiovasculares
            </p>
          </div>
          <div className="lg:hidden h-[1px] bg-gray1/50 w-full" />
          <div className="flex flex-col lg:gap-1 gap-10">
            <h1 className="font-bold text-red1">Links Rápidos</h1>
            <div className="flex lg:flex-row flex-col lg:items-center items-start gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="font-normal text-[16px] leading-[24px] hover:text-red1 text-black list-none"
                >
                  {link.title}
                </li>
              ))}
            </div>
          </div>
          <div className="lg:hidden h-[1px] bg-gray1/50 w-full" />
        </div>
        <div>
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
            Copyright Ⓒ 2025 Cardio Performance. Todos os direitos reservados.
          </p>
          <div className="flex items-center justify-center md:mt-0 mt-6">
            <FaInstagram
              size={25}
              color="black"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/cardioperformance?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                )
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
