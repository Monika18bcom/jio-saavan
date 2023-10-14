import React, { useState } from 'react'
import './GoPro.css'
import GoproPlanCard from './GoproPlanCard'
import logo from "../img/jio-saavn-white-logo.png";
import { Link } from 'react-router-dom';


function GoPro() {

    const yearPlan = {
        duration : '1 Year',
        cost : '₹ 749* /Year',
        offer : '*Limited Period Offer',
        submit : 'Get the Deal'
    }

    const monthPlan = {
        duration : '1 Month',
        cost : '₹ 99 /Month',
        submit : 'Buy Now'
    }

  return (
    <div className='gopro-main-container'>
        <div className='gopro-header'>
            <div className='gopro-sub-header'>
                <Link className='gopro-img-section' to='/home'>
                    <img src={logo} alt='jiosaavn logo'></img>
                    <h2>JioSaavn</h2>
                </Link>
                <div className='gopro-redeem-account-section'>
                    <div className='gopro-redeem'>
                        <span>Redeem</span>
                    </div>
                    <div className='gopro-my-account'>
                        <span>My Account</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='gopro-plans-container'>
            <div className='gopro-plan-grid'>
                <p>All your music and JioTunes,<span> plus...</span></p>
                <h1>Ad-free Music, Unlimited Downloads,Exclusive Original Content and <span>More</span>.</h1>
                <div className='gopro-plans-card-section'>
                    <GoproPlanCard plan={yearPlan} />
                    <GoproPlanCard plan={monthPlan} />
                    <div className='gopro-plans-need'>
                        <span>Why go Pro?</span>
                        <span>Learn More arrow down icon</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='gopro-main'></div>
        <div className='gopro-footer'></div>
    </div>
  )
}

export default GoPro