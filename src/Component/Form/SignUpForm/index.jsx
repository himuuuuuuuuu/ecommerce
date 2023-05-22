import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

import "./SignUpForm.css";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import ActionButton from "../../Action/ActionButton";
import ActionLink from "../../Action/ActionLink";

function SignUpForm(props) {
  const { onClose } = props;
  const { signUpHandler } = useAuth();

  const [signUpData, setSignUpData] = useState({
    signUpFirstName: "",
    signUpLastName: "",
    signUpEmail: "",
    signUpPassword: "",
    signUpConfirm: "",
  });

  const handleSignUpInput = (event) => {
    const { name, value } = event.target;
    setSignUpData((prevSignUpData) => {
      return { ...prevSignUpData, [name]: value };
    });
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    signUpHandler(
      signUpData.signUpEmail,
      signUpData.signUpPassword,
      signUpData.signUpFirstName,
      signUpData.signUpLastName
    );
  };

  return (
    <div className="sign_up_form_wrap">
      <div className="form_head">
        <img src={NavLogo} alt="nav_logo" />
        <h2>Sign Up</h2>
      </div>
      <form className="sign_up_form" onSubmit={handleSignUpSubmit}>
        <input
          name="signUpFirstName"
          placeholder="First Name"
          type="text"
          onChange={handleSignUpInput}
          value={signUpData.signUpFirstName}
        />
        <input
          name="signUpLastName"
          placeholder="Last Name"
          type="text"
          onChange={handleSignUpInput}
          value={signUpData.signUpLastName}
        />

        <input
          name="signUpEmail"
          placeholder="Email"
          type="email"
          onChange={handleSignUpInput}
          value={signUpData.signUpEmail}
        />
        <input
          name="signUpPassword"
          placeholder="Password"
          type="password"
          onChange={handleSignUpInput}
          value={signUpData.signUpPassword}
        />
        <input
          name="signUpConfirm"
          placeholder="Confirm Password"
          type="password"
          onChange={handleSignUpInput}
          value={signUpData.signUpConfirm}
        />
        <ActionButton
          className="sign_up_btn"
          btnType="submit"
          handleClick={onClose}
        >
          Sign Up
        </ActionButton>
      </form>
      <div className="sign_up_meta">
        <p className="is_sign_in">
          Have an Account? <Link>Sign in</Link>
        </p>
        <ActionLink>Back to Store</ActionLink>
      </div>
    </div>
  );
}

export default SignUpForm;
