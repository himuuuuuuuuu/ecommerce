import React from "react";
import axios from "axios";

const SignUpService = async ({ email, password, name }) => {
  return axios.post("/api/auth/signup", {
    email,
    password,
    name,
  });
};

export default SignUpService;
