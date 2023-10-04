import './App.css';
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import LogIn from '../Form/LogIn';
import Modal from '../Modal/Modal';
import FormContent from '../Form/FormContent';



export const JiosaavnContext = createContext({})

function App() {
  const [songData , setSongData] =  useState([])
  const [isUserLogin , setIsUserLogin] = useState(false)
  const [showModal , setShowModal] = useState(null)
  const [loginType , setLoginType] = useState("login")

  return (
    <JiosaavnContext.Provider value={{songData , setSongData , isUserLogin , setIsUserLogin , showModal , setShowModal}}>

    <div className="App">
      <Routes>
        <Route path='*' element={<MainPage />} />
        <Route path='/login' element={<LogIn loginType="login" />} />
        <Route path='/signup' element={<LogIn loginType="signup" />} />
        <Route path='/forgot-password' element={<LogIn loginType="forgotpassword" />} />
      </Routes>

      {
        (showModal && !isUserLogin) &&
        <Modal setShowModal={setShowModal} >
          <FormContent loginType={loginType} setLoginType={setLoginType} modal={showModal} />
        </Modal>
      }

    </div>

    </JiosaavnContext.Provider>
  );
}

export default App;
