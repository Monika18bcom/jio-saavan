import React from 'react'
import './ErrorComp.css'

function ErrorComp({children}) {
  return (
    <div className='error-comp-section'>
        <span>{children}</span>
    </div>
  )
}

export default ErrorComp