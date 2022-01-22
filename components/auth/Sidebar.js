import React from "react";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="hidden lg:w-1/2 h-full  lg:flex flex-col items-center justify-center bg-gradient-to-l from-modal-bg to-white">
      <h1 className="py-5 text-5xl text-yellow-global">shoppingfy</h1>
      <Image src="/shopping.svg " width={350} height={350} />
      <p className="p-3 text-lg text-text-gray">
        Fulfill your shopping desires
      </p>
    </div>
  );
}

export default Sidebar;
