import { FC } from "react";
import Logo from "../assets/logo.svg";

const Footer: FC = () => {
  return (
    <footer className="bg-background-300 pt-[300px] md:pt-[250px] lg:pt-[150px] pb-[100px]">
      <div className="w-[300px] md:w-[700px] lg:w-[900px] mx-auto">
        <img
          src={Logo}
          alt="Fylo logo"
          className="w-[100px] h-[30px] sm:w-[176px] sm:h-[52px]"
        />
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
