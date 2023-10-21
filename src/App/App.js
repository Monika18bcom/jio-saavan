import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import LogIn from "../Form/LogIn";
import Modal from "../Modal/Modal";
import FormContent from "../Form/FormContent";
import GoPro from "../NavBar/GoPro";
import { faL } from "@fortawesome/free-solid-svg-icons";

export const JiosaavnContext = createContext({});

function App() {
  
  const [songData, setSongData] = useState([]);
  const [showModal, setShowModal] = useState(null);
  const [loginType, setLoginType] = useState("login");
  const [isMobileLogin, setIsMobileLogin] = useState(true);
  const [isExpand, setIsExpand] = useState(false);
  const [userData, setUserData] = useState({
    userDetails: null,
    userToken: null,
  });
  const [isLoading , setIsLoading] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");

    // console.log(storedUserData, "user data set in localStorage");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <JiosaavnContext.Provider
      value={{
        songData,
        setSongData,
        showModal,
        setShowModal,
        loginType,
        setLoginType,
        isExpand,
        setIsExpand,
        userData,
        setUserData,
        isMobileLogin, 
        setIsMobileLogin,
        isLoading,
        setIsLoading,
        searchOpen,
        setSearchOpen
      }}
    >
      <div className="App">
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/login" element={<LogIn loginType="login" />} />
          <Route path="/signup" element={<LogIn loginType="signup" />} />
          <Route path="/forgot-password" element={<LogIn loginType="forgotpassword" />} />
          <Route path="/pro" element={<GoPro />} />
        </Routes>

        {showModal && !userData.userDetails && (
          <Modal>
            <FormContent loginType={loginType} />
          </Modal>
        )}
      </div>
    </JiosaavnContext.Provider>
  );
}

export default App;
