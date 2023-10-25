import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import FormButton from "./FormButton";
import LoginSignupForm from "./LoginSignupForm";
import './FormContent.css'
import { JiosaavnContext } from '../App/App';


function FormContent({loginType}) {

  const navigate = useNavigate()
  const {  setLoginType , showModal } = useContext(JiosaavnContext)


  return (
    <div className="login-right-section">
        <div className="login-right-form-container-top" style={{borderBottom: showModal && '1px solid #e9e9e9'}}>
          {
            loginType === "forgotpassword" ?
            (showModal ? <p style={{fontWeight: showModal && 'bolder' , textAlign: showModal && 'center'}} ><span style={{color: showModal && '#2bc5b4' , cursor: showModal && 'pointer'}} onClick={()=> showModal && setLoginType("login") } >Log In</span> or <span style={{color: showModal && '#2bc5b4' , cursor: showModal && 'pointer'}} onClick={()=> showModal && setLoginType("signup") } >Sign Up</span></p> :

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
              <p style={{textAlign: showModal && "center" , fontWeight: showModal && "bolder"}}>{loginType === "signup" ? "Already have an account? " :  `Don't have a JioSaavn account ${showModal ? '': 'yet'}?`}{ showModal && <span style={{color :'#2bc5b4' , cursor: 'pointer'}} onClick={()=> {loginType === "login" ? setLoginType('signup') : setLoginType('login')}}>{loginType === "login"? " Sign Up" : " Login"}</span>}.</p>
              {
                !showModal &&
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
          <LoginSignupForm loginType={loginType} />
        </div>
    </div>
  )
}

export default FormContent