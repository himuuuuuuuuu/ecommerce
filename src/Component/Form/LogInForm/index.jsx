import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./LogInForm.css";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import ActionButton from "../../Action/ActionButton";
import ActionLink from "../../Action/ActionLink";
import { useAuth } from "../../../Context/AuthContext";
import ModalWrap from "../../ModalWrap";
import SignUpForm from "../../Form/SignUpForm";

function LogInForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const [logInData, setLogInData] = useState({
    logInEmail: "",
    logInPassword: "",
  });

  const { logInHandler, token } = useAuth();

  const fixedLogInData = {
    logInEmail: "vhgfdh@gmail.com",
    logInPassword: "vhgfdh",
  };

  const handleLogInInput = (event) => {
    const { name, value } = event.target;
    setLogInData((prevLogInData) => {
      return { ...prevLogInData, [name]: value };
    });
  };

  const handleLogInSubmit = (event) => {
    event.preventDefault();
    logInHandler(logInData.logInEmail, logInData.logInPassword);
  };
  console.log(navigate);

  useEffect(() => {
    navigate(location?.state?.from.pathname || "/", { replace: true });
  }, [token]);

  return (
    <div className="sign_in_form_wrap">
      <div className="form_head">
        <img src={NavLogo} alt="nav_logo" />
        <h2>Sign In</h2>
      </div>
      <form className="sign_in_form" onSubmit={handleLogInSubmit}>
        <input
          name="logInEmail"
          type="email"
          placeholder="Email"
          required={true}
          onChange={handleLogInInput}
        />
        <input
          name="logInPassword"
          type="password"
          placeholder="Password"
          required={true}
          onChange={handleLogInInput}
        />
        <ActionButton btnType="submit">Log In</ActionButton>
        <ActionButton
          btnType="submit"
          handleClick={() => setLogInData(fixedLogInData)}
        >
          Log In As Guest
        </ActionButton>
      </form>
      <div className="sign_up_meta">
        <p className="is_sign_up">
          Don't have an Account?{" "}
          <ModalWrap actionIcon={"SIGN UP"}>
            <SignUpForm />
          </ModalWrap>
        </p>
        <ActionLink>Back to Store</ActionLink>
      </div>
    </div>
  );
}

export default LogInForm;
