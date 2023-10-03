import React, { useEffect, useState } from "react";
import "./LogIn.css";
import { NavLink, useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import LoginSignupForm from "./LoginSignupForm";
import FormImages from "./FormImages";

function LogIn({ loginType }) {

  const navigate = useNavigate();

  const [isMobileLogin, setIsMobileLogin] = useState(true);

  return (
    <div className="login-container">
      <FormImages />
      <div className="login-right-section">
        <div className="login-right-form-container-top">
          {
            loginType === "forgotpassword" ?
            <>
              <FormButton
                bg="#f6f6f6"
                hoverBg="#2a2d36"
                hoverColor="#fff"
                color="#2a2d36"
                fontWeight="bolder"
                fontSize="14px"
                cursor="pointer"
                border="1px solid #2a2d36"
                height="35px"
                width="90px"
                borderRadius="20px"
                onClick={() => {
                  navigate("/login")
                }}
              >
                Login
              </FormButton>
              <FormButton
                bg="#f6f6f6"
                hoverBg="#2a2d36"
                hoverColor="#fff"
                color="#2a2d36"
                fontWeight="bolder"
                fontSize="14px"
                cursor="pointer"
                border="1px solid #2a2d36"
                height="35px"
                width="90px"
                borderRadius="20px"
                onClick={() => {
                  navigate("/signup")
                }}
              >
                Sign Up
              </FormButton>
            </> :
            <>
              <p>{loginType === "signup" ? "Already have an account?" : "Don't have a JioSaavn account yet?"}</p>
              <FormButton
                bg="#f6f6f6"
                hoverBg="#2a2d36"
                hoverColor="#fff"
                color="#2a2d36"
                fontWeight="bolder"
                fontSize="14px"
                cursor="pointer"
                border="1px solid #2a2d36"
                height="35px"
                width="90px"
                borderRadius="20px"
                onClick={() => {
                  loginType === "signup"
                    ? navigate("/login")
                    : navigate("/signup");
                }}
              >
                {loginType === "signup" ? "Login" : "Sign Up"}
              </FormButton>
            </>
          }
        </div>
        <div className="login-right-form-container-bottom">
          <LoginSignupForm loginType={loginType} isMobileLogin={isMobileLogin} setIsMobileLogin={setIsMobileLogin}/>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
