import React from "react";

function Card({ heading, desc, icon }) {
  return (
    <div className="flex m-3 rounded-xl flex-col p-2 shadow-md hover:shadow-md shadow-text-gray items-center bg-white h-[200px] w-3/5 md:w-[300px] md: [100px] ">
      <span className="m-3 rounded-full bg-modal-purple text-white text-xl w-10 h-10 flex justify-center items-center">
        {icon}
      </span>
      <h2>{heading}</h2>
      <p className="m-3 text-text-gray">{desc}</p>
    </div>
  );
}

export default Card;
