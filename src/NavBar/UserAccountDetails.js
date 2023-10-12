import React from 'react'
import './UserAccountDetails.css'
import { useAuth } from '../useAuth';


function UserAccountDetails({setDisplayAccount}) {

    const { userData, logOut } = useAuth()


    const handleLogOut = () => {
        console.log('Logout clicked')
        logOut()
        setDisplayAccount(false)
        console.log(userData)
    }

  return (
    <div className='user-account-details-container'>
        <ul className='user-account-data-top'>
            <li>My Music</li>
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