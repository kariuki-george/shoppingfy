import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <div className="w-full flex items-center justify-between p-2">
      <div className="text-yellow-global text-[45px] flex items-center  font-bold ">
        <Image src="/logo.svg" height={45} width={45} />
        shoppingfy
      </div>
      <div>
        <button onClick={handleLogin} className="btn">
          login
        </button>
      </div>
    </div>
  );
}

export default Header;
