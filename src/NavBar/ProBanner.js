import React, { useContext } from 'react'
import { MdOutlineCancel } from "react-icons/md"
import {IoIosArrowForward} from 'react-icons/io'
import './ProBanner.css'
import { Link } from 'react-router-dom'
import { MainPageContext } from '../App/MainPage'



function ProBanner() {

  const {proBanner , setProBanner} = useContext(MainPageContext)
  return (
    <div className='pro-banner-container'>
      <div className='pro-banner-content'>
        <span className='text'>Ad-Free Music. Unlimited Downloads and JioTunes. And, Much More!</span>
        <span className='pro-banner-link'><Link target='_blank' to="/pro">Try JioSaavn Pro! <IoIosArrowForward /></Link></span> 
      </div>
      <div className='cancel-btn' onClick={()=>setProBanner(!proBanner)}>
        <MdOutlineCancel className='cancel-icon'/>
      </div> 
    </div>
  )
}

export default ProBanner