import React, { useState } from 'react'
import './GoPro.css'
import GoproPlanCard from './GoproPlanCard'
import logo from "../img/jio-saavn-white-logo.png";
import { Link } from 'react-router-dom';
import {IoIosArrowDown} from 'react-icons/io'
import Table from './Table';




function GoPro() {

    const yearPlan = {
        duration : '1 Year',
        cost : '₹ 749* /Year',
        offer : '*Limited Period Offer',
        submit : 'Get the Deal',
        mainStyle:{
            bg: '#2bc5b4'
        },
        payStyle:{
            bg: '#53d5c6',
            border: '1px solid #3fcdbe'
        },
        payBtnStyle:{
            bg: '#fff',
            color: '#2bc5b4'
        }
    }
    

    const monthPlan = {
        duration : '1 Month',
        cost : '₹ 99 /Month',
        submit : 'Buy Now',
        offer : " ",
        mainStyle:{
            bg: '#303540'
        },
        payStyle:{
            bg: '#3f4552',
            border: '1px solid #383d49'
        },
        payBtnStyle:{
            bg: '#2bc5b4',
            color: '#fff'
        }

    }

    const tableArr = [
        'Benefits',
        '80+ Million Songs',
        'JioTunes',
        'Recommendations',
        'Ad-Free Music',
        'Unlimited Downloads',
        'Listen Offline',
        'Highest Quality Audio',
        'Exclusive & Original Content',
        'Listen on Sonos, Alexa & More',
        'Special Access & Offers'
    ]

  return (
    <div className='gopro-main-container'>
        <div className='gopro-header'>
            <div className='gopro-sub-header'>
                <Link className='gopro-img-section' to='/'>
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
                {/* on click more should re direct to benefits */}
                <h1>Ad-free Music, Unlimited Downloads,<br />Exclusive Original Content and <a href='gopro-main' >More</a>.</h1>
                <div className='gopro-plans-card-section'>
                    <div className='year-plan'><GoproPlanCard plan={yearPlan} /></div>
                    <div className='month-plan'><GoproPlanCard plan={monthPlan} /></div>
                    <div className='why-pro'>
                        <p>Why go Pro?
                        <span className='learn-more'>Learn More <IoIosArrowDown /></span>
                        </p>
                        <div className='why-pro-pay-img'>
                            <img className='paytm-logo' src='https://static.saavncdn.com/_i/paytm-logo.png' alt='pay-logo'></img>
                            <img className='amazon-logo' src='https://static.saavncdn.com/_i/amazonPay-logo.png' alt='pay-logo'></img>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='gopro-main' id='gopro-main' >
            <main className='gopro-sub-main'>
                <h3>Get Even More With Pro.</h3>
                <div className='gopro-main-table'>
                    {
                        tableArr.map((e , idx)=> <Table key={idx} e={e}/>)
                    }
                </div>
                <h3></h3>
                <h4></h4>
                <div><span></span></div>
            </main>
        </div>
        <div className='gopro-footer'></div>
    </div>
  )
}

export default GoPro