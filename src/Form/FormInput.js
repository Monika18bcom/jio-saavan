import React from 'react'
import './FormInput.css'

function FormInput(props) {
  return (
    <div className="form-input-container">
        {props.mobileLogin &&<img className="country-flag" src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="country-flag"></img>}
        <input type={props.type} className="form-input" placeholder={props.placeholder} />
    </div>
  )
}

export default FormInput