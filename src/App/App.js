import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import LogIn from "../Form/LogIn";
import Modal from "../Modal/Modal";
import FormContent from "../Form/FormContent";

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

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    console.log(storedUserData, "user data set in localStorage");

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
        setIsMobileLogin
      }}
    >
      <div className="App">
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/login" element={<LogIn loginType="login" />} />
          <Route path="/signup" element={<LogIn loginType="signup" />} />
          <Route
            path="/forgot-password"
            element={<LogIn loginType="forgotpassword" />}
          />
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
