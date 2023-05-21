import React from "react";
import { Link } from "react-router-dom";

import "./SignUpForm.css";
import NavLogo from "../../../Asset/Navbar/NavLogo.png";
import ActionButton from "../../Action/ActionButton";
import ActionLink from "../../Action/ActionLink";

function SignUpForm() {
  return (
    <div className="sign_up_form_wrap">
      <div className="form_head">
        <img src={NavLogo} alt="nav_logo" />
        <h2>Sign Up</h2>
      </div>
      <form className="sign_up_form">
        <input name="firstName" placeholder="First Name" type="text" />
        <input name="lastName" placeholder="Last Name" type="text" />
        <input name="displayName" placeholder="Display Name" type="text" />
        <input name="countryName" placeholder="Country" type="text" />
        <input name="email" placeholder="Email" type="email" />
        <input name="password" placeholder="Password" type="password" />
        <ActionButton className="sign_up_btn">Sign Up</ActionButton>
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
