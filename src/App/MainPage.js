import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar';
import AsideLeft from '../AsideLeft/AsideLeft'
import Home from '../Home/Home'
import AsideBottom from '../AsideBottom/AsideBottom';
import AsideRight from '../AsideRight/AsideRight';
import NavMusic from '../NavBar/NavMusic';
import UserAccountDetails from '../NavBar/UserAccountDetails';

function MainPage() {
  const [isNavMusicHover , setIsNavMusicHover] = useState(false)
  const [displayAccount , setDisplayAccount] = useState(false)
  return (
    <>
        <NavBar setIsNavMusicHover={setIsNavMusicHover} setDisplayAccount={setDisplayAccount} displayAccount={displayAccount} />
        <AsideLeft />
        <Home />
        <AsideBottom />
        <AsideRight />
        {isNavMusicHover && <NavMusic setIsNavMusicHover={setIsNavMusicHover} />}
        {displayAccount && <UserAccountDetails setDisplayAccount={setDisplayAccount} /> }
    </>
  )
}

export default MainPage