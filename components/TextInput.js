import React from "react";

import { useField } from "formik";

export default ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className="label label-text text-text-gray"
      >
        {label}
      </label>
      <input
        className="input  bg-white border-yellow-global outline-global-yellow "
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="label label-text-alt text-red-400">{meta.error}</div>
      ) : null}
    </>
  );
};
