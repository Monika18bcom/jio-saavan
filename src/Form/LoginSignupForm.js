import React from "react";
import { NavLink } from "react-router-dom";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import "./LoginSignupForm.css";

function LoginSignupForm({ loginType , isMobileLogin , setIsMobileLogin }) {

  console.log(loginType)


  const handleEmailMobileLogin = () =>{
    setIsMobileLogin(!isMobileLogin)
  }

  return (
    <div className="login-signup-form-container">
      <div className="login-signup-welcome">
        <h1>{loginType === "forgotpassword" ? "Forgot Your Password?" : "Welcome to JioSaavn."}</h1>
        {
          loginType === "forgotpassword" ?
          <p>Enter the email address you used when you signed up and we'll help you out.</p> :
          <p>
          {loginType === "signup"
            ? `Sign up with your .`
            : `Log in or Sign up with your ${isMobileLogin ? "mobile number" : "email address"}.`
          }
        </p>
        }
      </div>
      <form className="login-signup-input-section">
        <FormInput
          isMobileLogin={isMobileLogin}
          type={(isMobileLogin === false) || (loginType === "forgotpassword")  ? "email" : "number"}
          placeHolder={isMobileLogin ? "Enter your mobile number" : "Email Address"}
          textAlign={isMobileLogin ? "left" : "center"}
          gap="23px"
          border="1px solid #e9e9e9"
          inputWidth="100%"
          borderRadius="23px"
          bg="#fff"
          width="100%"
          height="48px"
        />
        {
          isMobileLogin === false &&
          <FormInput
          isMobileLogin={isMobileLogin}
          type="password"
          placeHolder="Password"
          textAlign="center"
          gap="23px"
          border="1px solid #e9e9e9"
          inputWidth="100%"
          borderRadius="23px"
          bg="#fff"
          width="100%"
          height="48px"
          />
        }
        <FormButton
          bg="#2bc5b4"
          hoverBg="#1E897D"
          hoverColor="#fff"
          color="#fff"
          fontSize="20px"
          cursor="pointer"
          fontWeight="bolder"
          textAlign="center"
          height="48px"
          width="100%"
          borderRadius="23px"
          padding="25px"
        >
          {loginType === "forgotpassword" ? "Send Reminder" : "Continue"}
        </FormButton>
      </form>
      {
        isMobileLogin ?
        <p className="login-signup-form-terms-field">
        Select ‘Continue’ to give consent to JioSaavn’s{" "}
        <a
          className="terms-page"
          href="https://www.jiosaavn.com/corporate/terms/"
          target="_blank"
        >
          Terms of Service
        </a>{" "}
        and acknowledge that you have read and understood the{" "}
        <a
          className="terms-page"
          href="https://www.jiosaavn.com/corporate/privacy/"
          target="_blank"
        >
          Privacy Policy
        </a>
        . An SMS may be sent to authenticate your account, and message and data
        rates may apply.
        </p> :
        <div className="forget-password-terms-section">
          <NavLink to='/forgot-password'>Forget password?</NavLink>
          <p className="login-signup-form-terms-field">
            By selecting ‘Continue’, you agree to JioSaavn’s
            <a className="terms-page" href="https://www.jiosaavn.com/corporate/terms/" target="_blank"> Terms of Service </a>and
            <a className="terms-page" href="https://www.jiosaavn.com/corporate/privacy/" target="_blank"> Privacy Policy</a>.
          </p>
        </div>
      }
      <div className="login-signup-form-separator">or connect with</div>
      <div className="login-signup-email-fb">
        <FormButton
          bg="#2a2d36"
          hoverBg="#2a2d36"
          hoverColor="#fff"
          opacity='0.7'
          color="#fff"
          fontSize="16px"
          cursor="pointer"
          fontWeight="bolder"
          textAlign="center"
          height="48px"
          width="100%"
          borderRadius="23px"
          padding="20px"
          onClick={handleEmailMobileLogin}
        >
          {
            isMobileLogin ? "Email" : "Mobile Number" 
          }
        </FormButton>
        <FormButton
          bg="#3d5798"
          hoverBg="#24345B"
          hoverColor="#fff"
          color="#fff"
          fontSize="16px"
          cursor="pointer"
          fontWeight="bolder"
          textAlign="center"
          height="48px"
          width="100%"
          borderRadius="23px"
          padding="20px"
        >
          Facebook
        </FormButton>
      </div>
    </div>
  );
}

export default LoginSignupForm;
