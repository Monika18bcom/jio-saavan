import React, { useContext, useEffect, useRef, useState } from 'react'
import './UserAccountDetails.css'
import { useAuth } from '../useAuth';
import { MainPageContext } from '../App/MainPage';
import { useNavigate } from 'react-router-dom';
import { JiosaavnContext } from '../App/App';


function UserAccountDetails() {

    const { logOut } = useAuth()
    const { userData } = useContext(JiosaavnContext)
    const { setDisplayAccount , profileSelected , setProfileSelected } = useContext(MainPageContext)
    const navigate = useNavigate()
    const userAccountRef = useRef()

    const [firstRender , setFirstRender] = useState(false)

    useEffect(()=>{

        if(!firstRender){
            setFirstRender(true)
            return
        }

        if(userAccountRef.current && firstRender){
            window.addEventListener('click', (e)=>{
                if(userAccountRef.current && !userAccountRef?.current?.contains(e.target)){
                    setDisplayAccount(false)
                    setProfileSelected(!profileSelected)
                }
            })
        }

        return () =>{
            window.removeEventListener('click', ()=>{

            })
        }

    },[userAccountRef.current])

    const handleClick = (e) =>{
        if(e.target.parentElement.classList.contains('user-account-data-top')){
            if(userData.userDetails){
                if(e.target.classList.contains('my-music')){
                    navigate('/my-music')
                }
                else if(e.target.classList.contains('my-profile')){
                    navigate('/me')
                }
                else if(e.target.classList.contains('history')){
                    navigate('/listening-history')
                }
            }
            
        }
        else if(e.target.parentElement.classList.contains('user-account-data-bottom')){
            if(e.target.classList.contains('log-out')){
                logOut()
                navigate('/')
                setDisplayAccount(false)
            }
            
        }
    }


  return (
    <div className='user-account-details-container' ref={userAccountRef} onClick={(e) => handleClick(e)}>
        <ul className='user-account-data-top'>
            <li className='my-music'>My Music</li>
            <li className='my-profile'>My Profile</li>
            <li className='history'>History</li>
            <li className='account-settings'>Account Settings</li>
        </ul>
        <ul className='user-account-data-bottom'>
            <li className='help-support'>Help & Support</li>
            <li className='log-out'>Log Out</li>
        </ul>
    </div>
  )
}

export default UserAccountDetails