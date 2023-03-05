import { FC } from "react";
import Logo from "../assets/logo.svg";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const Footer: FC = () => {
  return (
    <footer className="bg-background-300 pt-[300px] md:pt-[250px] lg:pt-[150px] pb-[100px]">
      <div className="w-[300px] md:w-[700px] lg:w-[900px] mx-auto">
        <img
          src={Logo}
          alt="Fylo logo"
          className="w-[100px] h-[30px] sm:w-[176px] sm:h-[52px]"
        />
        <div className="flex flex-col md:flex-row justify-between gap-10 pt-8">
          <div className="">
            <p className="flex items-center gap-3 text-white">
              <FiPhoneCall />{" "}
              <span className="opacity-90 text-sm">+1-234-567-8900</span>
            </p>
            <p className="flex items-center gap-3 text-white">
              <FiMail />{" "}
              <span className="opacity-90 text-sm">example@fylo.com</span>
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-white opacity-90">
            <li>About us</li>
            <li>Jobs</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
          <ul className="flex gap-3 mx-auto md:mx-0">
            <li className="text-white">
              <BsFacebook className="w-6 h-6" />
            </li>
            <li className="text-white">
              <BsTwitter className="w-6 h-6" />
            </li>
            <li className="text-white">
              <BsInstagram className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
