import { navLinks } from "@/constants";
import logo from "../assets/logo.svg";
import instaLogo from "../assets/intagram.svg";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex justify-center items-center md:px-32 px-5 flex-col sm:py-16 py-6 bg-white"
    >
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full gap-5">
        <div className="flex-1 flex flex-col md:justify-start justify-center mr-10 ml-9">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className="text-black font-normal md:text-start text-center text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
            Informando e conscientizando sobre os riscos das doenças
            cardiovasculares
          </p>
        </div>
        <p>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="font-normal text-[16px] leading-[24px] hover:text-redVine text-black list-none"
            >
              {link.title}
            </li>
          ))}
        </p>
      </div>
      <Separator className="w-[90%]" />
      <div>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
          Copyright Ⓒ 2024 Cardio Performance. Todos os direitos reservados.
        </p>
        <div className="flex items-center justify-center md:mt-0 mt-6">
          <img
            src={instaLogo}
            alt="intagram link"
            className="w-[21px] h-[21px] object-contain cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.instagram.com/cardioperformance?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
