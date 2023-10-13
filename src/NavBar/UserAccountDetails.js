import React, { useContext, useEffect, useRef, useState } from 'react'
import './UserAccountDetails.css'
import { useAuth } from '../useAuth';
import { MainPageContext } from '../App/MainPage';
import { useNavigate } from 'react-router-dom';


function UserAccountDetails() {

    const { logOut } = useAuth()
    const { setDisplayAccount , profileSelected , setProfileSelected } = useContext(MainPageContext)
    const navigate = useNavigate()
    const userAccountRef = useRef()

    const [firstRender , setFirstRender] = useState(false)

    useEffect(()=>{

        if(!firstRender){
            console.log(firstRender)
            setFirstRender(true)
            return
        }

        if(userAccountRef.current && firstRender){
            console.log(profileSelected)
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


    const handleLogOut = () => {
        console.log('Logout clicked')
        logOut()
        setDisplayAccount(false)
    }

  return (
    <div className='user-account-details-container' ref={userAccountRef}>
        <ul className='user-account-data-top'>
            <li onClick={()=> navigate('/my-music')} >My Music</li>
            <li onClick={()=> navigate('/me')} >My Profile</li>
            <li onClick={()=> navigate('/listening-history')} >History</li>
            <li>Account Settings</li>
        </ul>
        <ul className='user-account-data-bottom'>
            <li>Help & Support</li>
            <li onClick={() => handleLogOut()}>Log Out</li>
        </ul>
    </div>
  )
}

export default UserAccountDetails