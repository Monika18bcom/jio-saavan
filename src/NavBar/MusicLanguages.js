import React, { useState } from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'


function MusicLanguages() {

    const langArr = ['Hindi','English','Punjabi','Tamil',
                    'Telugu','Marathi','Gujarati','Bengali',
                    'Kannada','Bhojpuri','Malayalam','Urdu',
                    'Haryanvi','Rajasthani','Odia','Assamese']
    
    const [isChecked, setIsChecked] = useState(true)
  return (
    <div>
        <div>
            <h5>What music do you like?</h5>
            <p>Pick all the languages you want to listen to.</p>
        </div>
        <div>You must select a language</div>
        <form>
            <ul>
                {langArr.map((e,idx)=>(
                    <li key={idx} className='music-lang-list-item' id={`music-lang-item${idx}`} >
                        <div className='lang-name'>{e}</div>
                        <div className='check-icon-section'>
                            {
                                isChecked && <IoIosCheckmarkCircle className='check-icon' />
                            }
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <button></button>
            </div>
        </form>
    </div>
  )
}

export default MusicLanguages