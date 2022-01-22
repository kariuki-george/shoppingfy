import React from "react";
import TextInput from "../TextInput";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { GoogleLogin } from "react-google-login";
import Link from "next/link";

function Register({ registerMutate, googleLogin }) {
  return (
    <div className="bg-gradient-to-r from-modal-bg to-white  w-full h-full lg:w-1/2 flex items-center ">
      <div className="w-[350px] m-auto border p-3 border-white rounded-md shadow-modal-purple shadow-md  flex flex-col  bg-white ">
        <h1 className="m-3 text-3xl">Welcome, let's get started</h1>
        <Formik
          initialValues={{
            email: "",
            password: "12345678",
            confirmPassword: "12345678",
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
            confirmPassword: yup
              .string()
              .oneOf([yup.ref("password"), null], "Passwords must match"),
          })}
          onSubmit={(values) => {
            registerMutate(values);
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
            <TextInput
              label="confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="12345678"
            />
            <button type="submit " className="mt-2 btn w-full">
              sign up
            </button>
            <p className="my-2">
              Already have an account?{" "}
              <Link href="/login">
                <span className="cursor-pointer text-modal-purple ">Login</span>
              </Link>
            </p>
          </Form>
        </Formik>
        <p className=" text-text-gray w-full text-center">or</p>
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_CLIENTID}
          onSuccess={googleLogin}
          onFailure={googleLogin}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default Register;
