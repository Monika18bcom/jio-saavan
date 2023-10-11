import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PROJECT_ID = 'nwi12vygvqne'

export function useAuth() {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        userDetails: null, 
        userToken : null,
    });

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
      setUserData({
        userDetails: result.data.user,
        userToken: result.token
      })
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
      setUserData({
        userDetails: result.data.user,
        userToken: result.token
      })
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

  // console.log(userData)

  return { userData, logIn, signUp, updatePassword };
}
