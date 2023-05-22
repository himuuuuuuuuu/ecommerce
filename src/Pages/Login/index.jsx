import React from "react";
import "./Login.css";
import PageContainer from "../../Component/Layout/PageContainer";
import SectionContainer from "../../Component/Layout/SectionContainer";
import LoginImg from "../../Asset/Login/LoginLogo.png";
import LogInForm from "../../Component/Form/LogInForm";

function Login() {
  return (
    <PageContainer>
      <SectionContainer className="login_section">
        <div className="login_section_wrap">
          <h1 className="login_head">
            <span>LOGIN</span>
            <img src={LoginImg} alt="login_img" />
          </h1>
          <div className="login_body">
            <LogInForm />
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default Login;
