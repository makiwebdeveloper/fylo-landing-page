import { FC } from "react";
import { teamComments } from "../constants";

const Team: FC = () => {
  return (
    <section id="team" className="bg-background-200 pt-16 pb-52">
      <div className="w-[400px] md:w-[750px] lg:w-[900px] mx-auto flex flex-col md:flex-row gap-5">
        {teamComments.map((item) => (
          <div key={item.img} className="bg-background-100 rounded-md p-6">
            <p className="text-white text-xs md:text-sm tracking-wider">
              {item.comment}
            </p>
            <div className="flex items-center gap-3 pt-4">
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
