import { FC } from "react";
import { features } from "../constants";

const Features: FC = () => {
  return (
    <section id="features" className="bg-background-200">
      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-5 w-[300px] md:w-[700px] mx-auto p-10 md:p-0">
        {features.map((feature) => (
          <div key={feature.img} className="text-center">
            <div className="mx-auto w-[100px] h-[100px] flex items-center justify-center">
              <img src={feature.img} />
            </div>
            <p className="text-white text-lg md:text-xl font-semibold ">
              {feature.title}
            </p>
            <p className="text-white text-xs md:text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
