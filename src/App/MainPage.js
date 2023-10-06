import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar';
import AsideLeft from '../AsideLeft/AsideLeft'
import Home from '../Home/Home'
import AsideBottom from '../AsideBottom/AsideBottom';
import AsideRight from '../AsideRight/AsideRight';
import NavMusic from '../NavBar/NavMusic';

function MainPage() {
  const [isNavMusicHover , setIsNavMusicHover] = useState(false)
  return (
    <>
        <NavBar setIsNavMusicHover={setIsNavMusicHover} />
        <AsideLeft />
        <Home />
        <AsideBottom />
        <AsideRight />
        {isNavMusicHover && <NavMusic setIsNavMusicHover={setIsNavMusicHover} />}
    </>
  )
}

export default MainPage