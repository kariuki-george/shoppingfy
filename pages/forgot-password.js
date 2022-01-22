import React from "react";
import ForgotPassword from "../components/auth/ForgotPassword";
import Sidebar from "../components/auth/Sidebar";

function forgot_password() {
    return (
        <div className="w-screen  min-h-screen flex h-screen  ">
          <Sidebar />
          <ForgotPassword />
        </div>
      );
}

export default forgot_password;



