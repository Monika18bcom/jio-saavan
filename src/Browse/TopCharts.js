import React from 'react'
import Browse from "../Browse/Browse";
import './TopCharts.css'

function TopCharts() {
  return (
    <div className='top-charts-container'>
        <Browse />
        <div className='top-charts-content'>
            <h4 className='top-charts-message'>Coming Soon...</h4>
        </div>
    </div>
  )
}

export default TopCharts