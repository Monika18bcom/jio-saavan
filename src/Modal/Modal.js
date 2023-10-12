import React, { useState , useEffect, useRef, useContext } from 'react'
import { JiosaavnContext } from '../App/App';
import './Modal.css'

function Modal({ children }) {

  const { setShowModal } = useContext(JiosaavnContext)

  const modalRef = useRef();
  const [firstRender , setFirstRender] = useState(false)
  
  useEffect(()=>{
    if(!firstRender){
      setFirstRender(true)
      return;
    }
    if(modalRef.current && firstRender){
      window.addEventListener('click' , (e)=>{
        console.log("event added")
        if(modalRef?.current && !modalRef.current?.contains(e.target)){
          setShowModal(false);    
        }
      })
    }
    
    return ()=>{
      window.removeEventListener('click' , ()=>{})
      console.log("event removed")
    }
  },[modalRef.current])

  console.log(modalRef , firstRender)
  return (
    <div className='modal-container' >
      <div className='login-modal-container' ref={modalRef}>
        <div className='login-modal-content'>{children}</div>
      </div>
    </div>
  )
}

export default Modal