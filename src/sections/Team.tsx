import { FC } from "react";
import { teamComments } from "../constants";

const Team: FC = () => {
  return (
    <section id="team" className="bg-background-200 py-12">
      <div className="w-[400px] md:w-[700px] lg:w-[900px] mx-auto flex flex-col md:flex-row gap-5">
        {teamComments.map((item) => (
          <div
            key={item.img}
            className="bg-background-100 rounded-md p-6 flex flex-col justify-between h-[200px] md:h-[240px] lg:h-[200px]"
          >
            <p className="text-white text-sm tracking-wider">{item.comment}</p>
            <div className="flex items-center gap-3">
              <img className="w-8 h-8 rounded-full" src={item.img} />
              <div>
                <p className="text-white text-xs tracking-wider font-semibold">
                  {item.name}
                </p>
                <p className="text-white text-[10px] tracking-wider opacity-80">
                  {item.job}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
