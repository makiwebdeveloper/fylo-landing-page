import { FC } from "react";
import Logo from "../assets/logo.svg";

const navbarLinks = ["features", "team", "sign in"];

const Navbar: FC = () => {
  return (
    <nav className="bg-background-100 flex justify-between items-center py-6 px-8 sm:py-8 sm:px-12">
      <img
        src={Logo}
        alt="Fylo logo"
        className="w-[100px] h-[30px] sm:w-[176px] sm:h-[52px]"
      />
      <ul className="flex items-center gap-4 sm:gap-10">
        {navbarLinks.map((item) => (
          <li key={item}>
            <a href={`#${item}`} className="text-white capitalize">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
