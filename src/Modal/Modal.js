import React from 'react'
import './Modal.css'

function Modal(props) {

  const handleModalClose = (e) =>{
    if(e.target.classList.contains('login-right-section')){
      console.log('clicked on modal content')
    }else{
      console.log('clicked on outer div clicked')
    }
  }
  return (
    <div className='modal-container' onClick={(e) => handleModalClose(e)}>
      <div className='login-modal-container'>
        <div className='login-modal-content'>{props.children}</div>
      </div>
    </div>
  )
}

export default Modal