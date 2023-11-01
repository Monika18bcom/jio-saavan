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
import MusicLanguages from '../NavBar/MusicLanguages';
import ErrorComp from './ErrorComp';

export const MainPageContext = createContext({})

function MainPage() {
  const [isNavMusicHover , setIsNavMusicHover] = useState(false)
  const [displayAccount , setDisplayAccount] = useState(false)
  const [profileSelected , setProfileSelected] = useState(false)
  const [proBanner , setProBanner] = useState(true)
  const [displayMusicLang , setDisplayMusicLang] = useState(false)
  const [musicLangArrow, setMusicLangArrow] = useState(false)
  const [musicLangName , setMusicLangName] = useState('Hindi')



  const {userData} = useContext(JiosaavnContext)

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
        displayMusicLang , 
        setDisplayMusicLang,
        musicLangArrow, 
        setMusicLangArrow,
        musicLangName , 
        setMusicLangName
      }}
    >
      <NavBar />
      <AsideLeft />
      <Home />
      {(proBanner && !userData?.isProActive) && <ProBanner />}
      <AsideBottom />
      {!isExpand && <div className='aside-right-queue'><AsideRight /></div>}
      {isNavMusicHover && <NavMusic />}
      {displayAccount && <UserAccountDetails /> }
      {searchOpen && <Search />}
      {displayMusicLang && <MusicLanguages /> }
      <ErrorComp>play again</ErrorComp>
    </MainPageContext.Provider>
  )
}

export default MainPage