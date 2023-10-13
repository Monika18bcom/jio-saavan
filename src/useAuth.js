import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JiosaavnContext } from './App/App';

const PROJECT_ID = 'nwi12vygvqne'

export function useAuth() {

  const navigate = useNavigate()

  const {setUserData} = useContext(JiosaavnContext)

  const [errApiResult , setErrApiResult] = useState('')

  const logIn = (email , password) => {
    console.log("login from useAuth")

    fetch('https://academics.newtonschool.co/api/v1/user/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'projectID' : PROJECT_ID
      },
      body: JSON.stringify({
          email: email,
          password: password,
          appType: 'music',
      })
    })
    .then((response)=> response.json())
    .then((result)=> {
      console.log(result)
      if(result.status === 'success'){
        console.log('status is successfull' , result.data , result.token)
        setUserData({ userDetails: result.data , userToken: result.token })
        localStorage.setItem('user' , JSON.stringify({ userDetails: result.data , userToken: result.token }))

        navigate('/')
      }else{
        setErrApiResult(result.message)
      }
    })   
  };

  const signUp = (name , email , password) => {
    console.log("signup from useAuth")

    fetch('https://academics.newtonschool.co/api/v1/user/signup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'projectID' : PROJECT_ID
      },
      body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          appType: 'music',
      })
    })
    .then((response)=> response.json())
    .then((result)=> {
      console.log(result)
      if(result.status === 'success'){
        console.log('status is successfull' , result.data.user , result.token)
        setUserData({ userDetails: result.data.user , userToken: result.token })
        localStorage.setItem('user' , JSON.stringify({ userDetails: result.data.user , userToken: result.token }))

        navigate('/')
      }else{
        setErrApiResult(result.message)
      }
      

    })
  };

  const updatePassword = (name , email , oldPassword , newPassword , token) => {
    console.log("update password from useAuth")

    fetch('https://academics.newtonschool.co/api/v1/user/updateMyPassword' , {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'projectID' : PROJECT_ID,
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({
          name: name,
          email: email,
          passwordCurrent: oldPassword,
          password: newPassword,
          appType: 'music',
      })
    })
    .then((response)=> response.json())
    .then((result)=> console.log(result))
  };

  const logOut = ()=>{
    console.log("logout func called")
    localStorage.removeItem('user')
    localStorage.removeItem('userName')
    setUserData({
      userDetails: null,
      userToken: null
    })
  }

  // console.log(userData)

  return { errApiResult , logIn, signUp, logOut, updatePassword };
}
