import React, { useContext } from 'react'
import './UserAccountDetails.css'
import { useAuth } from '../useAuth';
import { MainPageContext } from '../App/MainPage';
import { useNavigate } from 'react-router-dom';


function UserAccountDetails() {

    const { logOut } = useAuth()
    const { setDisplayAccount } = useContext(MainPageContext)
    const navigate = useNavigate()


    const handleLogOut = () => {
        console.log('Logout clicked')
        logOut()
        setDisplayAccount(false)
    }

  return (
    <div className='user-account-details-container'>
        <ul className='user-account-data-top'>
            <li onClick={()=> navigate('/my-music')} >My Music</li>
            <li>My Profile</li>
            <li>History</li>
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