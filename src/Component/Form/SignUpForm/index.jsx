import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

import "./SignUpForm.css";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import ActionButton from "../../Action/ActionButton";
import ActionLink from "../../Action/ActionLink";
import { validateEmail, validatePassword } from "../../Utils";

function SignUpForm() {
  const { signUpHandler, token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [signUpData, setSignUpData] = useState({
    signUpFirstName: "",
    signUpLastName: "",
    signUpEmail: "",
    signUpPassword: "",
    signUpConfirm: "",
  });

  const [signUpErrorData, setSignUpErrorData] = useState({
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

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  }, [token]);

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
          required
        />
        <input
          name="signUpLastName"
          placeholder="Last Name"
          type="text"
          onChange={handleSignUpInput}
          value={signUpData.signUpLastName}
          required
        />

        <input
          name="signUpEmail"
          placeholder="Email"
          type="email"
          onChange={(event) => {
            handleSignUpInput(event);
            if (!validateEmail(event.target.value)) {
              setSignUpErrorData((prevSignUpErrorData) => {
                return {
                  ...prevSignUpErrorData,
                  [event.target.name]: "EMAIL SHOULD BE IN CORRECT FORMAT",
                };
              });
            } else {
              setSignUpErrorData((prevSignUpErrorData) => {
                return { ...prevSignUpErrorData, [event.target.name]: "" };
              });
            }
          }}
          value={signUpData.signUpEmail}
          required
        />
        {signUpErrorData.signUpEmail && (
          <div className="signup_error">{signUpErrorData.signUpEmail}</div>
        )}
        <input
          name="signUpPassword"
          placeholder="Password"
          type="password"
          onChange={(event) => {
            handleSignUpInput(event);
            if (!validatePassword(event.target.value)) {
              setSignUpErrorData((prevSignUpErrorData) => {
                return {
                  ...prevSignUpErrorData,
                  [event.target.name]:
                    "PASSWORD SHOULD BE IN 8 TO 20 CHARACTERS AND SHOULD HAVE ONE DIGIT",
                };
              });
            } else {
              setSignUpErrorData((prevSignUpErrorData) => {
                return { ...prevSignUpErrorData, [event.target.name]: "" };
              });
            }
          }}
          value={signUpData.signUpPassword}
          required
        />
        {signUpErrorData.signUpPassword && (
          <div className="signup_error">{signUpErrorData.signUpPassword}</div>
        )}
        <input
          name="signUpConfirm"
          placeholder="Confirm Password"
          type="password"
          onChange={handleSignUpInput}
          value={signUpData.signUpConfirm}
          required
        />
        <ActionButton className="sign_up_btn" btnType="submit">
          Sign Up
        </ActionButton>
      </form>
      <div className="sign_up_meta">
        <p className="is_sign_in">
          Have an Account? <Link to="/login">Sign in</Link>
        </p>
        <ActionLink reach="/productList">Back to Store</ActionLink>
      </div>
    </div>
  );
}

export default SignUpForm;
