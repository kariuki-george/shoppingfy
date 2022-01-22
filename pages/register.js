import React from "react";
import Sidebar from "../components/auth/Sidebar";
import Register from "../components/auth/Register";
import axios from "axios";
import { queryCache, useMutation } from "react-query";
import toast from "react-hot-toast";
import { SpinnerCircular } from "spinners-react";
import { useRouter } from "next/router";

function register() {
  const router = useRouter();
  const handleRegister = async (user) => {
    const { data } = await axios.post(
      "http://localhost:5000/api/auth/register",
      user
    );
    return data;
  };
  const googleLogin = async (e) => {
    const access_token = e.accessToken;
    const { data } = await axios.post("/auth/google", {
      header: { access_token },
    });
    return data;
  };
  const { mutate, isLoading } = useMutation(handleRegister, {
    onSuccess: (data) => {
      if (!data.success) {
        return toast.error(data.message);
      }
      toast.success("User created successfully");
      router.push("/login");
    },
    onError: (error) => {
      console.log(error);
      return toast.error(error?.message);
    },
  });
  const { googleMutate } = useMutation(googleLogin, {
    onSuccess: (data) => {
      if (!data.success) {
        return toast.error(data.message);
      }
      toast.success("User added successfully");
      return queryCache.setQueryData("user", () => {
        data;
      });
    },
    onError: (error) => {
      return toast.error(error);
    },
  });

  isLoading && <SpinnerCircular />;

  return (
    <div className="w-screen h-screen min-h-screen flex ">
      <Sidebar />
      <Register registerMutate={mutate} googleLogin={googleMutate} />
    </div>
  );
}

export default register;
