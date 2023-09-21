import './App.css';
import { createContext, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import AsideLeft from '../AsideLeft/AsideLeft'
import Home from '../Home/Home'
import Form from '../Form/Form';
import AsideBottom from '../AsideBottom/AsideBottom';
import AsideRight from '../AsideRight/AsideRight';


export const JiosaavnContext = createContext({})

function App() {
  const [songData , setSongData] =  useState([])

  return (
    <JiosaavnContext.Provider value={{songData:songData , setSongData: setSongData}}>

    <div className="App">
     <NavBar />
     <AsideLeft />
     <Home />
     <AsideBottom />
     <AsideRight />
     <Form />
     

    </div>

    </JiosaavnContext.Provider>
  );
}

export default App;
