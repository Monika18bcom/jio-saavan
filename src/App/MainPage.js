import React, { createContext, useContext, useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import AsideLeft from '../AsideLeft/AsideLeft'
import Home from '../Home/Home'
import AsideBottom from '../AsideBottom/AsideBottom';
import AsideRight from '../AsideRight/AsideRight';
import NavMusic from '../NavBar/NavMusic';
import UserAccountDetails from '../NavBar/UserAccountDetails';
import { JiosaavnContext } from './App';
import Search from '../NavBar/Search';
import './App.css'
import ProBanner from '../NavBar/ProBanner';

export const MainPageContext = createContext({})

function MainPage() {
  const [isNavMusicHover , setIsNavMusicHover] = useState(false)
  const [displayAccount , setDisplayAccount] = useState(false)
  const [profileSelected , setProfileSelected] = useState(false)
  const [proBanner , setProBanner] = useState(true)
  const [isProActive, setIsProActive] = useState(false)

  // console.log(isProActive, 'mainpage.js')

  useEffect(()=>{
    localStorage.setItem('isProActive' , isProActive)
    const isPro = JSON.parse(localStorage.getItem('isProActive'))
    if(isPro){
      setIsProActive(isPro)
    } 
  },[])

  const { searchOpen , isExpand } = useContext(JiosaavnContext)

  return (
    <MainPageContext.Provider 
      value={{
        isNavMusicHover, 
        setIsNavMusicHover,
        displayAccount,
        setDisplayAccount,
        profileSelected , 
        setProfileSelected,
        proBanner , 
        setProBanner,
        isProActive, 
        setIsProActive
      }}
    >
      <NavBar />
      <AsideLeft />
      <Home />
      {(proBanner && !isProActive) && <ProBanner />}
      <AsideBottom />
      {!isExpand && <div className='aside-right-queue'><AsideRight /></div>}
      {isNavMusicHover && <NavMusic />}
      {displayAccount && <UserAccountDetails /> }
      {searchOpen && <Search />}
    </MainPageContext.Provider>
  )
}

export default MainPage