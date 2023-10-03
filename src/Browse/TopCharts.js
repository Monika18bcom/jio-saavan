import React from 'react'
import Browse from "../Browse/Browse";
import './TopCharts.css'

function TopCharts({type}) {
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