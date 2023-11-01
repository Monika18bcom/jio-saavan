import React, { useContext, useState } from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import './MusicLanguages.css'


function MusicLanguages() {

    const langArr = ['Hindi','English','Punjabi','Tamil',
                    'Telugu','Marathi','Gujarati','Bengali',
                    'Kannada','Bhojpuri','Malayalam','Urdu',
                    'Haryanvi','Rajasthani','Odia','Assamese']
    
    const [isChecked, setIsChecked] = useState(false)
    const [error , setError] = useState(false)

    
  return (
    <div className='music-lang-container'>
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
                        {/* <div className='check-icon-section'>
                            
                        </div> */}
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