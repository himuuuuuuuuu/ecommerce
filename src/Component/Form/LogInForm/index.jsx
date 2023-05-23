import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./LogInForm.css";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import ActionButton from "../../Action/ActionButton";
import ActionLink from "../../Action/ActionLink";
import { useAuth } from "../../../Context/AuthContext";

function LogInForm() {
  const { logInHandler, token } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [logInData, setLogInData] = useState({
    logInEmail: "",
    logInPassword: "",
  });

  const fixedLogInData = {
    logInEmail: "adarshbalika@gmail.com",
    logInPassword: "adarshbalika",
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

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from.pathname || "/", { replace: true });
    }
  }, [token]);

  return (
    <div className="sign_in_form_wrap">
      <div className="form_head">
        <img src={NavLogo} alt="nav_logo" />
        <h2>Log In</h2>
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
          handleClick={() =>
            setLogInData({
              logInEmail: fixedLogInData.logInEmail,
              logInPassword: fixedLogInData.logInPassword,
            })
          }
        >
          Log In As Guest
        </ActionButton>
      </form>
      <div className="sign_up_meta">
        <p className="is_sign_up">
          Don't have an Account?{" "}
          <ActionButton handleClick={() => navigate("/signup")}>
            SIGN UP
          </ActionButton>
        </p>
        <ActionLink reach="/productList">Back to Store</ActionLink>
      </div>
    </div>
  );
}

export default LogInForm;
