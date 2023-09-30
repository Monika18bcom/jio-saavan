import './App.css';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import SignUp from '../Form/SignUp';
import LogIn from '../Form/LogIn';



export const JiosaavnContext = createContext({})

function App() {
  const [songData , setSongData] =  useState([])

  return (
    <JiosaavnContext.Provider value={{songData , setSongData }}>

    <div className="App">
      <Routes>
        <Route path='*' element={<MainPage />} />
        <Route path='/login' element={<LogIn loginType="login" />} />
        <Route path='/signup' element={<LogIn loginType="signup" />} />
      </Routes>
    </div>

    </JiosaavnContext.Provider>
  );
}

export default App;
