import React, { useState } from 'react'


const PROJECT_ID = 'nwi12vygvqne'

// const initialState = {
//     userDetails: null, 
//     userToken : null
// }


function userAuth() {

    const [data , setData] = useState()
    
    const logIn = (email , password)=>{
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
        .then((result)=> console.log(result))    
    }

    const signUp = (name , email , password)=>{
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
        .then((result)=> console.log(result))

    }

    const updatePassword = (name , email , oldPassword , newPassword , token)=>{
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
    }

  return {logIn , signUp , updatePassword}
}

export default userAuth



