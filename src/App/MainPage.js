import React, { createContext, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import AsideLeft from '../AsideLeft/AsideLeft'
import Home from '../Home/Home'
import AsideBottom from '../AsideBottom/AsideBottom';
import AsideRight from '../AsideRight/AsideRight';
import NavMusic from '../NavBar/NavMusic';
import UserAccountDetails from '../NavBar/UserAccountDetails';

export const MainPageContext = createContext({})

function MainPage() {
  const [isNavMusicHover , setIsNavMusicHover] = useState(false)
  const [displayAccount , setDisplayAccount] = useState(false)


  return (
    <MainPageContext.Provider 
      value={{
        isNavMusicHover, 
        setIsNavMusicHover,
        displayAccount,
        setDisplayAccount
      }}
    >
      <NavBar />
      <AsideLeft />
      <Home />
      <AsideBottom />
      <AsideRight />
      {isNavMusicHover && <NavMusic />}
      {displayAccount && <UserAccountDetails /> }
    </MainPageContext.Provider>
  )
}

export default MainPage