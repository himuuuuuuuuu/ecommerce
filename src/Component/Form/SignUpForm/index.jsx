import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

import "./SignUpForm.css";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import { ActionButton, ActionLink } from "../../../Component";
import { validateEmail, validatePassword } from "../../Utils";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignUpForm() {
  const { signUpHandler, token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignPass, setIsSignPass] = useState(false);
  const [isSignConfirmPass, setIsSignConfirmPass] = useState(false);

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
    if (signUpData.signUpPassword === signUpData.signUpConfirm) {
      signUpHandler(
        signUpData.signUpEmail,
        signUpData.signUpPassword,
        signUpData.signUpFirstName,
        signUpData.signUpLastName
      );
    } else {
      setSignUpErrorData((prevSignUpErrorData) => {
        return {
          ...prevSignUpErrorData,
          signUpConfirm: "Passwords don't match",
        };
      });
    }
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
        <label className="signup_password">
          <input
            name="signUpPassword"
            placeholder="Password"
            type={isSignPass ? "text" : "password"}
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
          {isSignPass ? (
            <button
              className="signup_password_visibility"
              onClick={(event) => {
                event.preventDefault();
                setIsSignPass(false);
              }}
              type="button"
            >
              <Visibility />
            </button>
          ) : (
            <button
              className="signup_password_visibility"
              onClick={(event) => {
                event.preventDefault();
                setIsSignPass(true);
              }}
              type="button"
            >
              <VisibilityOff />
            </button>
          )}
        </label>
        {signUpErrorData.signUpPassword && (
          <div className="signup_error">{signUpErrorData.signUpPassword}</div>
        )}
        <label className="signup_password">
          <input
            name="signUpConfirm"
            placeholder="Confirm Password"
            type={isSignConfirmPass ? "text" : "password"}
            onChange={handleSignUpInput}
            value={signUpData.signUpConfirm}
            required
          />
          {isSignConfirmPass ? (
            <button
              className="signup_password_visibility"
              onClick={(event) => {
                event.preventDefault();
                setIsSignConfirmPass(false);
              }}
              type="button"
            >
              <Visibility />
            </button>
          ) : (
            <button
              className="signup_password_visibility"
              onClick={(event) => {
                event.preventDefault();
                setIsSignConfirmPass(true);
              }}
              type="button"
            >
              <VisibilityOff />
            </button>
          )}
        </label>
        {signUpErrorData.signUpConfirm && (
          <div className="signup_error">{signUpErrorData.signUpConfirm}</div>
        )}
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
