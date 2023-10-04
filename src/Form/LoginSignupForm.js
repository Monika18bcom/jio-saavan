import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import "./LoginSignupForm.css";

function LoginSignupForm({ loginType , setLoginType , modal , isMobileLogin , setIsMobileLogin }) {

  const navigate = useNavigate()

  useEffect(()=>{
    if((loginType === "forgotpassword") && isMobileLogin){
      navigate('/login')
    } 
  },[])


  const handleEmailMobileLogin = () =>{
    setIsMobileLogin(!isMobileLogin)
  }

  return (
    <div className="login-signup-form-container" style={{width: modal && '100%' , height: modal && '100%' , padding : modal && '0px 48px'}}>
      <div className="login-signup-welcome" style={{textAlign: modal && 'center' , paddingTop: modal && '10px'}}>
        <h1 style={{fontSize : modal && '24px'}}>{loginType === "forgotpassword" ? "Forgot Your Password?" : "Welcome to JioSaavn."}</h1>
        {
          loginType === "forgotpassword" ?
          <p style={{fontSize: '13px'}} >Enter the email address you used when you signed up and we'll help you out.</p> : 
          (modal ? 
          <p style={{fontSize: '13px'}}>
            {(loginType === "signup")
              ? "Sign up to create playlists, build your library, get personalized recommendations & more!"
              : "Log in to create playlists, build your library, get personalized recommendations & more!"
            }
          </p> :
          <p>
            {(loginType === "signup")
              ? `Sign up with your ${isMobileLogin ? "mobile number" : "email address"}.`
              : `Log in or Sign up with your ${isMobileLogin ? "mobile number" : "email address"}.`
            }
          </p>
          )
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
          isMobileLogin === false && loginType !== "forgotpassword" &&
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
        {
          isMobileLogin === false && loginType !== "forgotpassword" && loginType === "signup" &&
          <FormInput
          isMobileLogin={isMobileLogin}
          type="password"
          placeHolder="Confirm Password"
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
      { loginType !== "forgotpassword" &&
      <>{
        isMobileLogin ?
        <p className="login-signup-form-terms-field" style={{color : modal && '#a9a9a9'}}>
        Select ‘Continue’ to give consent to JioSaavn’s{" "}
        <a
          className="terms-page"
          href="https://www.jiosaavn.com/corporate/terms/"
          target="_blank"
          style={{color: modal && '#2a2d36'}}
        >
          Terms of Service
        </a>{" "}
        and acknowledge that you have read and understood the{" "}
        <a
          className="terms-page"
          href="https://www.jiosaavn.com/corporate/privacy/"
          target="_blank"
          style={{color: modal && '#2a2d36'}}
        >
          Privacy Policy
        </a>
        . An SMS may be sent to authenticate your account, and message and data
        rates may apply.
        </p> :
        <div className="forget-password-terms-section">
          {loginType === "login" && <p style={{color: modal && '#2bc5b4' , cursor: modal && 'pointer'}} onClick={()=> modal ? setLoginType("forgotpassword") : navigate('/forgot-password') }>Forget password?</p>}
          <p className="login-signup-form-terms-field">
            By selecting ‘Continue’, you agree to JioSaavn’s
            <a className="terms-page" href="https://www.jiosaavn.com/corporate/terms/" target="_blank" style={{color: modal && '#2a2d36'}}> Terms of Service </a>and
            <a className="terms-page" href="https://www.jiosaavn.com/corporate/privacy/" target="_blank" style={{color: modal && '#2a2d36'}}> Privacy Policy</a>.
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
      </>}
    </div>
  );
}

export default LoginSignupForm;
