import React, { useContext, useEffect, useRef, useState } from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import { MainPageContext } from '../App/MainPage'
import './MusicLanguages.css'


function MusicLanguages() {

    const langArr = ['Hindi','English','Punjabi','Tamil',
                    'Telugu','Marathi','Gujarati','Bengali',
                    'Kannada','Bhojpuri','Malayalam','Urdu',
                    'Haryanvi','Rajasthani','Odia','Assamese']
    
    const [isChecked, setIsChecked] = useState(false)
    const [error , setError] = useState(false)
    const {setDisplayMusicLang , musicLangArrow, setMusicLangArrow } = useContext(MainPageContext)

    const musicLangRef = useRef()

    const [firstRender , setFirstRender] = useState(false)

    useEffect(()=>{

        if(!firstRender){
            setFirstRender(true)
            return
        }

        if(musicLangRef.current && firstRender){
            window.addEventListener('click', (e)=>{
                if(musicLangRef.current && !musicLangRef?.current?.contains(e.target)){
                    setDisplayMusicLang(false)
                    setMusicLangArrow(!musicLangArrow)
                }
            })
        }

        return () =>{
            window.removeEventListener('click', ()=>{

            })
        }

    },[musicLangRef.current])

    
  return (
    <div className='music-lang-container' ref={musicLangRef}>
        <div className='music-lang-header'>
            <h5>What music do you like?</h5>
            <p>Pick all the languages you want to listen to.</p>
        </div>
        {error && <div className='music-lang-error'>You must select a language</div>}
        <form className='music-lang-form'>
            <ul className='music-lang-ul'>
                {langArr.map((e,idx)=>(
                    <li key={idx} className='music-lang-list-item' id={`music-lang-item${idx}`} >
                        <div className='lang-name'>{e}</div>
                        {
                            isChecked && <IoIosCheckmarkCircle className='check-icon' />
                        }
                    </li>
                ))}
            </ul>
            <div className='update-btn'>
                <button>Update</button>
            </div>
        </form>
    </div>
  )
}

export default MusicLanguages