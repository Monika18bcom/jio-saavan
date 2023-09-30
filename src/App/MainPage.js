import React from 'react'
import NavBar from '../NavBar/NavBar';
import AsideLeft from '../AsideLeft/AsideLeft'
import Home from '../Home/Home'
import AsideBottom from '../AsideBottom/AsideBottom';
import AsideRight from '../AsideRight/AsideRight';

function MainPage() {
  return (
    <>
        <NavBar />
        <AsideLeft />
        <Home />
        <AsideBottom />
        <AsideRight />
    </>
  )
}

export default MainPage