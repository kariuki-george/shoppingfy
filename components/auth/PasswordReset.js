import React from "react";
import TextInput from "../TextInput";
import { Formik, Form } from "formik";
import * as yup from "yup";

function PasswordReset({ handlePasswordReset }) {
  return (
    <div className="bg-gradient-to-r from-modal-bg to-white  w-full h-full lg:w-1/2 flex items-center ">
      <div className="w-[350px] m-auto border p-3 border-white rounded-md shadow-modal-purple shadow-md  flex flex-col  bg-white ">
        <h1 className="m-3 text-3xl ">Uum, Let's reset that pass</h1>
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
            confirmPassword: yup
              .string()
              .oneOf([yup.ref("password"), null], "Passwords must match"),
          })}
          onSubmit={(values) => {
            handlePasswordReset(values);
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
            <button type="submit" className="btn mt-3">
              reset
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default PasswordReset;
