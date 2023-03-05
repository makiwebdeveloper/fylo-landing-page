import { FC } from "react";
import { Button } from "../ui";

const GetStarted: FC = () => {
  return (
    <div className="bg-gray-200 relative h-0">
      <div
        id="signin"
        className="bg-background-100 w-[300px] md:w-[500px] lg:w-[700px] absolute left-[50%] translate-x-[-50%] translate-y-[-40%] md:lg:translate-y-[-50%] lg:translate-y-[-60%] py-10 px-14 shadow-xl rounded-lg text-center"
      >
        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
          Get early access today
        </h3>
        <p className="text-white text-sm lg:text-base my-6">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-3 lg:gap-6">
          <input
            className="w-full rounded-full px-6 py-3 outline-none placeholder:text-sm md:placeholder:text-base"
            placeholder="example@gmail.com"
          />
          <Button styles="capitalize">Get started for free</Button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
