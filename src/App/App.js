import "./App.css";
import { createContext, useEffect, useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import LogIn from "../Form/LogIn";
import Modal from "../Modal/Modal";
import FormContent from "../Form/FormContent";
import GoPro from "../NavBar/GoPro";

export const JiosaavnContext = createContext({});

function App() {

  const [songId , setSongId] = useState(null)
  
  const [showModal, setShowModal] = useState(null);
  const [loginType, setLoginType] = useState("login");
  const [isMobileLogin, setIsMobileLogin] = useState(true);
  const [isExpand, setIsExpand] = useState(false);
  const [userData, setUserData] = useState({
    userDetails: null,
    userToken: null,
    isproActive: false,
  });
  const [isLoading , setIsLoading] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [updateQueue, setUpdateQueue] = useState(null)

  const [showErrorComp , setShowErrorComp] = useState(null)
  const [showOption , setShowOption] = useState(false)


  const searchReducer = (state , action) =>{
    switch (action.type) {
      case action.type:
        return state.map((e) => {
          if (e.type === action.type) {
            setIsLoading(false);
            return { ...e, data: action.payload };
          } else return { ...e };
        });
      default: return state;
    }
  }

  const [searchState , searchDispatch] = useReducer(searchReducer,[
    { data: [], type: "song" , limit: '100' , key: 'title'},
    { data: [], type: "album" , limit: '100' , key: 'title'},
    { data: [], type: "artist" , limit: '100' , key: 'name'},
  ])


  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    if(userData.userToken){
      localStorage.setItem('user' , JSON.stringify(userData))
    }
  }, [userData]);


  return (
    <JiosaavnContext.Provider
      value={{
        songId , 
        setSongId,
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
        setSearchOpen,
        inputValue, 
        setInputValue,
        searchState , 
        searchDispatch,
        updateQueue, 
        setUpdateQueue,
        showErrorComp , 
        setShowErrorComp,
        showOption , 
        setShowOption
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
