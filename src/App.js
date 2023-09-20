import './App.css';
import { createContext, useState } from 'react';
import NavBar from './NavBar';
import AsideLeft from './AsideLeft'
import Main from './Main'
import Form from './Form';
import AsideBottom from './AsideBottom';
import AsideRight from './AsideRight';
// import { Route, Routes } from 'react-router-dom';


export const JiosaavanContext = createContext({})

function App() {
  const [songData , setSongData] =  useState([])

  return (
    <JiosaavanContext.Provider value={{songData:songData , setSongData: setSongData}}>

    <div className="App">
     <NavBar />
     <AsideLeft />
     <Main />
     <AsideBottom />
     <AsideRight />
     <Form />
     {/* <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/podcasts' element={<Podcasts />}/>
      <Route path='/gopro' element={<GoPro />}/>
     </Routes> */}

    </div>

    </JiosaavanContext.Provider>
  );
}

export default App;
