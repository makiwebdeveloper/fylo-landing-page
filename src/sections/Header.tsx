import { FC } from "react";
import PresentationImg from "../assets/illustration-intro.png";
import BgCurvy from "../assets/bg-curvy-desktop.svg";
import { Button } from "../ui";

const Header: FC = () => {
  return (
    <header className="bg-background-100 min-h-screen p-10 relative">
      <div className="relative z-[1] md:w-[600px] mx-auto text-center">
        <img src={PresentationImg} alt="presentation" />
        <h1 className="text-white text-4xl font-semibold mt-10">
          All your files in one secure location,
          <br /> accessible anywhere
        </h1>
        <p className="text-white opacity-90 w-[90%] mx-auto tracking-wider mt-10">
          Fylo stores all your most important files in one secure location.
          <br />
          Access them wherever you need, share and collaborate with friends
          famoly, and co-workers.
        </p>
        <Button styles="mt-5">Get Started</Button>
      </div>

      <div className="absolute bottom-0 left-0 z-[0]">
        <img src={BgCurvy} className="pointer-events-none w-full" />
      </div>
    </header>
  );
};

export default Header;
