import React from "react";
import Image from "next/image";

function Business() {
  return (
    <div className="bg-gradient-to-b from-modal-bg to-white w-full p-3 px-4 flex flex-col items-center justify-center lg:flex-row ">
      <div className="flex-col items-center  lg:w-1/2 m-2">
        <h1 className="text-4xl">We Make Your Shopping Right</h1>
        <p className="my-3 text-text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          dolore nostrum soluta porro voluptatibus consectetur pariatur aliquam
          minus dolorem, optio ipsum iure nam, doloremque, corporis quasi
          blanditiis vitae perspiciatis obcaecati.
        </p>
        <button className="btn w-full">Get Started</button>
      </div>

      <div className=" w-full flex flex-col items-center justify-center  ">
        <img
          className=" object-fill  rounded-xl"
          alt="Happy customer"
          src="https://media.istockphoto.com/photos/smiling-woman-at-supermarket-picture-id1179046996?b=1&k=20&m=1179046996&s=170667a&w=0&h=5yAYxwgtecxk57PJzkG-Eb-Om8RXfuVqGvw9tbUea-8="
        />
      </div>
    </div>
  );
}

export default Business;
