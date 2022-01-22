import React from "react";
import Login from "../components/auth/Login";
import Sidebar from "../components/auth/Sidebar";
import { useMutation } from "react-query";

function login() {
  const handleLogin = (values) => {};
  const googleLogin = (e) => {
    console.log(e.accessToken);
  };
  return (
    <div className="w-screen  min-h-screen flex h-screen ">
      <Sidebar />
      <Login handleLogin={handleLogin} googleLogin={googleLogin} />
    </div>
  );
}

export default login;
