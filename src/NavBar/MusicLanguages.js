import React, { useContext, useEffect, useRef, useState } from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import { MainPageContext } from '../App/MainPage'
import './MusicLanguages.css'


function MusicLanguages() {

    const langArr = [
        'Hindi','English','Punjabi','Tamil',
        'Telugu','Marathi','Gujarati','Bengali',
        'Kannada','Bhojpuri','Malayalam','Urdu',
        'Haryanvi','Rajasthani','Odia','Assamese'
    ]
                    
    const {setDisplayMusicLang , musicLangArrow, setMusicLangArrow , setMusicLangName } = useContext(MainPageContext)
    const musicLangRef = useRef()

    const [error , setError] = useState(false)
    const [firstRender , setFirstRender] = useState(false)
    const [checkedIdx , setCheckedIdx] = useState(0)
    const [langName , setLangName] = useState('')

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

    const handleChecked = (idx , e) =>{
        setCheckedIdx(idx)
        setLangName(e)
        
    }

    const handleMusicLangSubmit = (e) =>{
        e.preventDefault()

        setMusicLangName(langName)

        setDisplayMusicLang(false)
        setMusicLangArrow(!musicLangArrow)
    }

    
  return (
    <div className='music-lang-container' ref={musicLangRef}>
        <div className='music-lang-header'>
            <h5>What music do you like?</h5>
            <p>Pick all the languages you want to listen to.</p>
        </div>
        {error && <div className='music-lang-error'>You must select a language</div>}
        <form className='music-lang-form' onSubmit={e => handleMusicLangSubmit(e)}>
            <ul className='music-lang-ul'>
                {langArr.map((e,idx)=>(
                    <li key={idx} className='music-lang-list-item' onClick={()=> handleChecked(idx , e)}>
                        <div className='lang-name'>{e}</div>
                        {
                            checkedIdx === idx && <IoIosCheckmarkCircle className='check-icon' />
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