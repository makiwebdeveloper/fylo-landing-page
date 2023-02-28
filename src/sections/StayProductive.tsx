import { FC } from "react";
import ProductiveImg from "../assets/illustration-stay-productive.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const StayProductive: FC = () => {
  return (
    <section className="bg-background-200 py-16">
      <div className="flex w-[400px] md:w-[600px] lg:w-[900px] mx-auto flex-col md:flex-row items-center gap-10 md:gap-5 lg:gap-10">
        <img src={ProductiveImg} className="w-[70%] md:w-[50%]" />
        <div className="md:w-[50%]">
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold text-center md:text-left">
            Stay productive,
            <br /> wherever you are
          </h3>
          <p className="text-white tracking-wider mt-5 text-sm md:text-base">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-white tracking-wider mt-5 text-sm md:text-base">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attackments required.
          </p>
          <p className="mt-5 pointer-cursor">
            <a className="flex items-center tracking-wider gap-3 text-cyan-400 border-b-2 border-cyan-400 w-fit pb-1 cursor-pointer text-sm md:text-base">
              See how Fylo works <BsFillArrowRightCircleFill />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
