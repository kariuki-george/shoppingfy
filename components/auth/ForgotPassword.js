import React from "react";
import TextInput from "../TextInput";
import { Formik, Form } from "formik";
import * as yup from "yup";

function ForgotPassword({ handleForgotPassword, handleResend }) {
  return (
    <div className="bg-gradient-to-r from-modal-bg to-white  w-full h-full lg:w-1/2 flex items-center ">
      <div className="w-[350px] m-auto border p-3 border-white rounded-md shadow-modal-purple shadow-md  flex flex-col  bg-white ">
        <h1 className="m-3 text-3xl lg:hidden">Oops, Forgot Password?</h1>
        <p>You will receive an email from us with the link</p>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={yup.object({
            email: yup
              .string()
              .email("Invalid email address")
              .required("Required"),
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

            <button className="btn my-5" type="submit">
              Send Link
            </button>
            <p className="my-2">Didn't receive the link?</p>
            <button onClick={handleResend} className="btn">
              Resend
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ForgotPassword;
