import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JiosaavnContext } from './App/App';

const PROJECT_ID = 'nwi12vygvqne'

export function useAuth() {

  const navigate = useNavigate()

  const {userData , setUserData} = useContext(JiosaavnContext)

  const [errApiResult , setErrApiResult] = useState('')

  const logIn = (email , password) => {

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
      if(result.status === 'success'){
        setUserData({...userData , userDetails: result.data , userToken: result.token})

        navigate('/')
      }else{
        setErrApiResult(result.message)
      }
    })   
  };

  const signUp = (name , email , password) => {

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
      if(result.status === 'success'){
        setUserData({...userData , userDetails: result.data.user , userToken: result.token })

        navigate('/')
      }else{
        setErrApiResult(result.message)
      }
    })
  };

  const updatePassword = (name , email , oldPassword , newPassword , token) => {

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
    localStorage.removeItem('user')
    localStorage.removeItem('userName')
    setUserData({
      userDetails: null,
      userToken: null,
      isProActive: false,
    })
  }

  return { errApiResult , logIn, signUp, logOut, updatePassword };
}
