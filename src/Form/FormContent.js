import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormButton from "./FormButton";
import LoginSignupForm from "./LoginSignupForm";
import './FormContent.css'
// import userAuth from '../userAuth/userAuth';


function FormContent({ loginType , modal , setLoginType }) {
    console.log(modal , loginType , setLoginType)
    // const {logIn , signUp , updatePassword} =  userAuth()

    const [isMobileLogin, setIsMobileLogin] = useState(true);
    const navigate = useNavigate()

    // useEffect(()=>{
    //   updatePassword()
    // },[])


  return (
    <div className="login-right-section">
        <div className="login-right-form-container-top" style={{borderBottom: modal && '1px solid #e9e9e9'}}>
          {
            loginType === "forgotpassword" ?
            (modal ? <p style={{fontWeight: modal && 'bolder' , textAlign: modal && 'center'}} ><span style={{color: modal && '#2bc5b4' , cursor: modal && 'pointer'}} onClick={()=> modal && setLoginType("login") } >Log In</span> or <span style={{color: modal && '#2bc5b4' , cursor: modal && 'pointer'}} onClick={()=> modal && setLoginType("signup") } >Sign Up</span></p> :

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
                width="105px"
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
                width="105px"
                borderRadius="20px"
                onClick={() => {
                    navigate("/signup")
                }}
                >
                Sign Up
                </FormButton>
            </>  
            ):
            <>
              <p style={{textAlign: modal && "center" , fontWeight: modal && "bolder"}}>{loginType === "signup" ? "Already have an account? " :  `Don't have a JioSaavn account ${modal ? '': 'yet'}?`}{ modal && <span style={{color :'#2bc5b4' , cursor: 'pointer'}} onClick={()=> {loginType === "login" ? setLoginType('signup') : setLoginType('login')}}>{loginType === "login"? " Sign Up" : " Login"}</span>}.</p>
              {
                !modal &&
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
                width="105px"
                borderRadius="20px"
                onClick={() => {
                  loginType === "signup"
                    ? navigate("/login")
                    : navigate("/signup");
                }}
              >
                {loginType === "signup" ? "Login" : "Sign Up"}
              </FormButton>}
            </>
          }
        </div>
        <div className="login-right-form-container-bottom" >
          <LoginSignupForm loginType={loginType} setLoginType={setLoginType} modal={modal} isMobileLogin={isMobileLogin} setIsMobileLogin={setIsMobileLogin}/>
        </div>
    </div>
  )
}

export default FormContent