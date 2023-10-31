import React, { useContext } from 'react'
import { MdOutlineCancel } from "react-icons/md"
import {IoIosArrowForward} from 'react-icons/io'
import './ProBanner.css'
import { Link } from 'react-router-dom'
import { MainPageContext } from '../App/MainPage'



function ProBanner() {

  const {proBanner , setProBanner} = useContext(MainPageContext)

  const openWindowTabFunc = () =>{
    const newTab = window.open('/pro' , '_blank')
    window.addEventListener('message',(event)=>{
      console.log(event , 'event')
      if(event.data === 'proActivated' && newTab){
        newTab.close()
        history.push('/')

      }
    })
  }

  return (
    <div className='pro-banner-container'>
      <div className='pro-banner-content'>
        <span className='text'>Ad-Free Music. Unlimited Downloads and JioTunes. And, Much More!</span>
        {/* <span className='pro-banner-link' onClick={openWindowTabFunc}><Link target='_blank' to="/pro">Try JioSaavn Pro! <IoIosArrowForward /></Link></span>  */}
        <span className='pro-banner-link' onClick={openWindowTabFunc}>Try JioSaavn Pro! <IoIosArrowForward /></span> 
      </div>
      <div className='cancel-btn' onClick={()=>setProBanner(!proBanner)}>
        <MdOutlineCancel className='cancel-icon'/>
      </div> 
    </div>
  )
}

export default ProBanner