import React from "react";
import TextInput from "../TextInput";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { GoogleLogin } from "react-google-login";
import Link from "next/link";

function Login({ googleLogin, handleLogin }) {
  return (
    <div className="bg-gradient-to-r from-modal-bg to-white  w-full h-full lg:w-1/2 flex items-center ">
      <div className="w-[350px] m-auto border p-3 border-white rounded-md shadow-modal-purple shadow-md  flex flex-col  bg-white ">
        <h1 className="m-3 text-3xl ">Hi, Let's login</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={yup.object({
            email: yup
              .string()
              .email("Invalid email address")
              .required("Required"),
            password: yup
              .string()
              .required("Required")
              .min(8, "Must be 8 characters or more"),
          })}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          <Form className="flex flex-col ">
            <TextInput
              label="email"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
            />
            <TextInput
              label="password"
              name="password"
              type="password"
              placeholder="12345678"
            />
            <button type="submit" className="btn mt-3">
              login
            </button>
          </Form>
        </Formik>
        <p className="my-3 text-text-gray w-full text-center">or</p>
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_CLIENTID}
          onSuccess={googleLogin}
          onFailure={googleLogin}
          cookiePolicy={"single_host_origin"}
        />
        <p className="my-3">
          Don't have an account?{" "}
          <Link href="/register">
            <span className="text-modal-purple cursor-pointer">Sign Up</span>
          </Link>
        </p>
        <Link href="/forgot-password">
          <span className="text-modal-purple cursor-pointer">
            Forgot your password
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
