import React, { useEffect, useMemo, useReducer, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import "./LoginSignupForm.css";
import { useAuth } from '../useAuth';


function LoginSignupForm({ loginType , setLoginType , modal , isMobileLogin , setIsMobileLogin }) {

  const navigate = useNavigate()

  const { userData, errApiResult , logIn, signUp, updatePassword } = useAuth()


  const [isPlaceholderVisible , setIsPlaceholderVisible] = useState(true)

  const initialState = {
    number: '',
    email: '',
    password: '',
    confirmPassword: '',
    numberBorder:'',
    emailBorder:'',
    passwordBorder:'',
    confirmPasswordBorder:'',
    error: false,
    errorMessage: '',
  }

  const Reducer = ( state , action ) => {

    switch(action.type){
      case 'number':
        return {...state , number: action.payload}
      case 'email':
        return {...state , email: action.payload}
      case 'password':
        return {...state , password: action.payload}
      case 'confirmPassword':
        return {...state , confirmPassword: action.payload}
      case 'numberBorder':
        return {...state , numberBorder: action.payload}
      case 'emailBorder':
        return {...state , emailBorder: action.payload}
      case 'passwordBorder':
        return {...state , passwordBorder: action.payload}
      case 'confirmPasswordBorder':
        return {...state , confirmPasswordBorder: action.payload}
      case 'error':
        return {...state , error: action.payload}
      case 'errorMessage':
        return {...state , errorMessage: action.payload}
      default : 
        return state
      
    }

  }
  const [{ number , email , password , confirmPassword , numberBorder , emailBorder , passwordBorder , confirmPasswordBorder , error , errorMessage } , dispatch] = useReducer(Reducer , initialState)


  const userName = useMemo(()=>{

    const idx = email.indexOf('@')
    if (idx !== -1){
      return email.substring(0 , idx)
    }

  },[email])

  useEffect(()=>{
    if((loginType === "forgotpassword") && isMobileLogin){
      navigate('/login')
    } 
  },[])

  useEffect(()=>{
    if(errApiResult){
      if(loginType === 'login'){
        dispatch({ type: 'error', payload: true })
        dispatch({ type: 'errorMessage' , payload: 'Incorrect username/password. Please try again.'})
      }else{
        dispatch({ type: 'error', payload: true })
        dispatch({ type: 'errorMessage' , payload: 'User already exists. Please try another username.'})
      }
      
    }
  },[errApiResult])


  const handleEmailMobileLogin = () =>{
    setIsMobileLogin(!isMobileLogin)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
      dispatch({ type: 'emailBorder', payload: "1px solid red" })
    }
    else if (!password){
      dispatch({ type: 'emailBorder', payload: '' })

      dispatch({ type: 'passwordBorder', payload: "1px solid red" })
    }
    else if (!confirmPassword && (loginType === 'signup')){
      dispatch({ type: 'emailBorder', payload: '' })
      
      dispatch({ type: 'passwordBorder', payload: '' })

      dispatch({ type: 'confirmPasswordBorder', payload: "1px solid red" })
    }
    else{
      dispatch({ type: 'emailBorder', payload: '' })
      
      dispatch({ type: 'passwordBorder', payload: '' })

      dispatch({ type: 'confirmPasswordBorder', payload: '' })
    }

    if(password && confirmPassword){
      if(password !== confirmPassword){
        dispatch({ type: 'error', payload: true })
        dispatch({ type: 'errorMessage' , payload: 'Please make sure your passwords match'})
      }
    }
    else{
      dispatch({ type: 'error', payload: false })
    }

    if(loginType === 'login'){
      if(email && password){
        logIn( email , password )
      }
      
    }
    else if(loginType === 'signup'){
      if(email && password){
        signUp(userName , email , password)
      }
      
    }
        
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

        {
          error && 
          <div className="loginSignupFormError" >{errorMessage}</div>
        }
      </div>
      <form className="login-signup-input-section" onSubmit={(e) => handleSubmit(e) } >
        <FormInput
          isMobileLogin={isMobileLogin}
          type={(isMobileLogin === false) || (loginType === "forgotpassword")  ? "email" : "number"}
          value = {(isMobileLogin === false) || (loginType === "forgotpassword")  ? email : number}
          onChange={(e)=>{
            if((isMobileLogin === false) || (loginType === "forgotpassword")){
              dispatch({
                type: 'email' ,
                payload : e.target.value
              })
            }else {
              dispatch({
                type: 'number',
                payload : e.target.value
              })
            }
            
          }}
          placeHolder={isMobileLogin ? "Enter your mobile number" : "Email Address"}
          isPlaceholderVisible={isPlaceholderVisible}
          textAlign={isMobileLogin ? "left" : "center"}
          gap="23px"
          border={(isMobileLogin === false) || (loginType === "forgotpassword")  ? emailBorder : numberBorder }
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
          value = {password}
          onChange={(e)=>{
            dispatch({
              type: 'password' ,
              payload : e.target.value
            })
          }}
          placeHolder="Password"
          isPlaceholderVisible={isPlaceholderVisible}
          textAlign="center"
          gap="23px"
          border={passwordBorder}
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
          value={confirmPassword}
          onChange={(e)=>{
            dispatch({
              type: 'confirmPassword' ,
              payload : e.target.value
            })
          }}
          placeHolder="Confirm Password"
          isPlaceholderVisible={isPlaceholderVisible}
          textAlign="center"
          gap="23px"
          border={confirmPasswordBorder}
          inputWidth="100%"
          borderRadius="23px"
          bg="#fff"
          width="100%"
          height="48px"
          />
        }
        <FormButton
          type="submit"
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
          {loginType === "login" && <p style={{color: '#2bc5b4' , cursor: 'pointer'}} onClick={()=> modal ? setLoginType("forgotpassword") : navigate('/forgot-password') }>Forget password?</p>}
          <p className="login-signup-form-terms-field" style={{color : modal && '#a9a9a9'}} >
            By selecting ‘Continue’, you agree to JioSaavn’s
            <a className="terms-page" href="https://www.jiosaavn.com/corporate/terms/" target="_blank" style={{color: modal && '#2a2d36'}}> Terms of Service </a>and
            <a className="terms-page" href="https://www.jiosaavn.com/corporate/privacy/" target="_blank" style={{color: modal && '#2a2d36'}}> Privacy Policy</a>.
          </p>
        </div>
      }
      <div className="login-signup-form-separator">or connect with</div>
      <div className="login-signup-email-fb" style={{paddingBottom: modal && '30px'}}>
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
          width={modal ? '115%' :"100%"}
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
