import React, { useContext, useEffect } from 'react'
import { JiosaavnContext } from './App'
import './ErrorComp.css'

function ErrorComp({children}) {

  const {showErrorComp , setShowErrorComp} = useContext(JiosaavnContext)

  useEffect(()=>{
    setTimeout(()=>{
      setShowErrorComp(null)
    },1500)
  },[showErrorComp])
  
  return (
    <div className='error-comp-section'>
        <span>{children}</span>
    </div>
  )
}

export default ErrorComp