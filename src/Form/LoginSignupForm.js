import React from 'react'
import FormButton from './FormButton'
import FormInput from './FormInput'
import './LoginSignupForm.css'

function LoginSignupForm({loginType}) {
  return (
    <div className='login-signup-form-container'>
      <div className='login-signup-welcome'>
        <h1>Welcome to JioSaavn.</h1>
        <p>
          {loginType === 'signUp'
            ? "Sign up with your mobile number."
            : "Log in or Sign up with your mobile number"
          }
        </p>
      </div>
      <form className='login-signup-input-section'>
        <FormInput mobileLogin='true' />
        <FormButton bg="#2bc5b4" color="#fff" fontSize="20px" fontWeight="bolder" textAlign="center" height="48px" width="100%" borderRadius="23px" padding="25px" >Continue</FormButton>
      </form>
      <p className="login-signup-form-terms-field">
          Select ‘Continue’ to give consent to JioSaavn’s{" "}
          <a className="terms-page" href="https://www.jiosaavn.com/corporate/terms/" target= "_blank">Terms of Service</a> and acknowledge that you have read and
          understood the <a className="terms-page" href="https://www.jiosaavn.com/corporate/privacy/" target= "_blank">Privacy Policy</a>. An SMS may be sent to
          authenticate your account, and message and data rates may apply.
      </p> 
      <div className="login-signup-form-separator">or connect with</div>
      <div className='login-signup-email-fb'>
        <FormButton bg="#2a2d36" color="#fff" fontSize="16px" fontWeight="bolder" textAlign="center" height="48px" width="100%" borderRadius="23px" padding="20px" >Email</FormButton>
        <FormButton bg="#3d5798" color="#fff" fontSize="16px" fontWeight="bolder" textAlign="center" height="48px" width="100%" borderRadius="23px" padding="20px" >FaceBook</FormButton>
      </div>
    </div>
  )
}

export default LoginSignupForm