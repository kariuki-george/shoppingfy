import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="p-3  md:my-10 w-full md:relative  items-center flex flex-col  justify-center md:flex-row md:items-center md:justify-around ">
      <div className="w-full z-10 md:sticky left-0 mb-5 flex-col md:w-1/2   flex items-start">
        <h1 className="text-6xl md:text-7xl my-8">
          Manage your{" "}
          <span className="font-thin underline decoration-wavy md:decoration-dotted decoration-modal-purple">
            shopping
          </span>{" "}
          easily.
        </h1>
        <p className="my-2 md:my-8  text-text-gray">
          Use the shortest possible time to create a shopping list.
        </p>
        <button className="btn w-full m-auto">Get Started</button>
      </div>
      <div className="p-5 md:sticky right-0 flex z-0   justify-center items-center  lg:w-1/2 bg-modal-bg rounded-full">
        <Image src="/undraw_shopping.svg" width={400} height={400} />
      </div>
    </div>
  );
}

export default Hero;

