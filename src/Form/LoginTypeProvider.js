import React, { createContext, useContext, useReducer } from 'react'

const loginTypeChange = createContext()

export const LoginTypeProvider= ({children}) => {
  const initialState = {

  }

  function reducer(state, action){
    switch(action.type){
        case "login":

        case "signup":

        case "signout":

        default:
            return {...state}
    }
  }

  const [loginTypestate , loginTypeDispatch ] = useReducer(reducer , initialState)
  let obj = {
    loginType : loginTypestate.loginType
  }
}

return <LoginTypeProvider>{children}</LoginTypeProvider>

const loginType = useContext(loginTypeChange)
