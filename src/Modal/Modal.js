import React from 'react'
import './Modal.css'

function Modal(props) {
  return (
    <div className='modal-container'>
      <div className='login-modal-container'>
        <div className='login-modal-content'>{props.children}</div>
      </div>
    </div>
  )
}

export default Modal