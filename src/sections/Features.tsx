import { FC } from "react";
import { features } from "../constants";

const Features: FC = () => {
  return (
    <section id="features" className="bg-background-200">
      <div className="grid md:grid-cols-2 md:grid-rows-2 md:gap-x-10 lg:gap-x-24 gap-y-5 w-[400px] md:w-[600px] lg:w-[900px] mx-auto p-10 md:p-0">
        {features.map((feature) => (
          <div key={feature.img}>
            <div className="mx-auto w-[100px] h-[100px] flex items-center justify-center">
              <img src={feature.img} />
            </div>
            <p className="text-white text-lg md:text-xl font-semibold text-center">
              {feature.title}
            </p>
            <p className="text-white text-xs md:text-sm text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
