import React, { useRef, useState } from 'react'
import './GoPro.css'
import GoproPlanCard from './GoproPlanCard'
import logo from "../img/jio-saavn-white-logo.png";
import { Link } from 'react-router-dom';
import {IoIosArrowDown} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaXmark} from 'react-icons/fa6'
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
        {col1: 'Benefits' , col2: 'Free' , col3: 'Pro', border: 'top'},
        {col1: '80+ Million Songs' , col2: true },
        {col1: 'JioTunes' , col2: true },
        {col1: 'Recommendations' , col2: true },
        {col1: 'Ad-Free Music'  },
        {col1: 'Unlimited Downloads' },
        {col1: 'Listen Offline' },
        {col1: 'Highest Quality Audio' },
        {col1: 'Exclusive & Original Content' },
        {col1: 'Listen on Sonos, Alexa & More' },
        {col1: 'Special Access & Offers' , border: 'bottom'},
    ]

    const scrollRef = useRef(null)
    const [isHamburger , setIsHamburger] = useState(false)

    const scrollToBenefits = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleHamburger = () => {
        setIsHamburger(!isHamburger);
    }

    const windowMessageFunc = () =>{
        window.opener.postMessage('proActivated','*')
    }

  return (
    <div className='gopro-main-container'>
        <div className='gopro-header'>
            <div className='gopro-sub-header'>
                <Link className='gopro-img-section' to='/'>
                    <img src={logo} alt='jiosaavn logo'></img>
                    <h2>JioSaavn</h2>
                </Link>
                <GiHamburgerMenu className='hamburgur-menu' onClick={toggleHamburger} />
                <div className='gopro-redeem-account-section'>
                    <div className='gopro-redeem'>
                        <span onClick={windowMessageFunc}>Redeem</span>
                    </div>
                    <div className='gopro-my-account'>
                        <span onClick={windowMessageFunc}>My Account</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='gopro-plans-container'>
            <div className='gopro-plan-grid'>
                <p>All your music and JioTunes,<span> plus...</span></p>
                <h1>Ad-free Music, Unlimited Downloads,<br />Exclusive Original Content and <span onClick={scrollToBenefits} >More</span>.</h1>
                <div className='gopro-plans-card-section'>
                    <div className='year-plan'><GoproPlanCard plan={yearPlan} /></div>
                    <div className='month-plan'><GoproPlanCard plan={monthPlan} /></div>
                    <div className='why-pro'>
                        <p>Why go Pro?
                        <span className='learn-more' onClick={scrollToBenefits}>Learn More <IoIosArrowDown /></span>
                        </p>
                        <div className='why-pro-pay-img'>
                            <img className='paytm-logo' src='https://static.saavncdn.com/_i/paytm-logo.png' alt='pay-logo'></img>
                            <img className='amazon-logo' src='https://static.saavncdn.com/_i/amazonPay-logo.png' alt='pay-logo'></img>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='gopro-main' id='gopro-main' ref={scrollRef}>
            <main className='gopro-sub-main'>
                <h3 className='more-with-pro'>Get Even More With Pro.</h3>
                <div className='gopro-main-table'>
                    {
                        tableArr.map((e , idx)=> <Table key={idx} e={e}/>)
                    }
                </div>
                <h3 className='try-pro-now'>Try Pro Now</h3>
                <h4>Make music beautiful.</h4>
                <div className='pick-plan-btn' onClick={windowMessageFunc}><span>Pick a Plan</span></div>
            </main>
        </div>
        <div className='gopro-footer'>
            <div className='gopro-footer-angle'></div>
        </div>
        {
            isHamburger &&
            <div className='gopro-modal-bg'>
                <div className='gopro-modal-container'>
                    <div className='gopro-modal-btns-section'>
                        <div className='gopro-modal-redeem'>
                            <span onClick={windowMessageFunc}>Redeem</span>
                        </div>
                        <div className='gopro-modal-account' onClick={windowMessageFunc}>My Account</div>
                    </div>
                    <FaXmark className='gopro-xmark' onClick={toggleHamburger} />
                </div>
            </div>
        }
    </div>
    
  )
}

export default GoPro