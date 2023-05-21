import React from "react";
import { Link } from "react-router-dom";

import "./LogInForm.css";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import ActionButton from "../../Action/ActionButton";
import ActionLink from "../../Action/ActionLink";

function LogInForm() {
  return (
    <div className="sign_in_form_wrap">
      <div className="form_head">
        <img src={NavLogo} alt="nav_logo" />
        <h2>Sign In</h2>
      </div>
      <form className="sign_in_form">
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <label className="sign_in_remember">
          <input type="checkbox" />
          <span>Remember Me</span>
        </label>
        <ActionButton>Sign In</ActionButton>
      </form>
      <div className="sign_up_meta">
        <p className="is_forget">
          Forgot your password? <Link>Reset</Link>
        </p>
        <p className="is_sign_up">
          Don't have an Account? <Link>Sign Up</Link>
        </p>
        <ActionLink>Back to Store</ActionLink>
      </div>
    </div>
  );
}

export default LogInForm;
