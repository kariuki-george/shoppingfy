import React from "react";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Feature from "../components/landing/Feature";
import Business from "../components/landing/Business";
import Footer from "../components/landing/Footer";

function landing() {
  return (
    <div className="w-full p-5 md:p-7 lg:p-10 overflow-x-hidden ">
      <Header />

      <Hero />
      <Feature />
      <Business />
      <Footer />
    </div>
  );
}

export default landing;
