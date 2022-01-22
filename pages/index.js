import React, { useState, useEffect } from "react";
import auth from "../utils/auth";

function index() {
  return <div>shoppift</div>;
}
export default index;

export const getServerSideProps = auth(async (ctx) => {
  return {
    props: {},
  };
});
