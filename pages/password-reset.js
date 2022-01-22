import React from "react";
import PasswordReset from "../components/auth/PasswordReset";
import Sidebar from "../components/auth/Sidebar";
import { useMutation } from "react-query";

const password_reset = () => {
  return (
    <div className="w-screen  min-h-screen flex h-screen ">
      <Sidebar />
      <PasswordReset />
    </div>
  );
};

export default password_reset;
