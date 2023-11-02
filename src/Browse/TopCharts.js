import React, { useEffect } from 'react'
import Browse from "../Browse/Browse";
import './TopCharts.css'

function TopCharts({type}) {

  useEffect(()=>{
    window.scrollTo({top:0 , behavior: 'smooth'})
  },[])
  return (
    <div className='top-charts-container'>
        <Browse type={type} />
        <div className='top-charts-content'>
            <h4 className='top-charts-message'>Coming Soon...</h4>
        </div>
    </div>
  )
}

export default TopCharts