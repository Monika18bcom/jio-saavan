import React from 'react'

function Modal(props) {
    console.log(props.children)
  return (
    <div className='modal-container'>{props.children}</div>
  )
}

export default Modal