import { useState } from "react";

import "./Form.css";

function Form({loginType}) {
//   const [userType, setUserType] = useState(true);
  return (
    // <div className="form-modal hidden">
        
    // </div>
    <div className="form-container">
        <div className="form-header">
            <p className="form-header-content">
                <strong>{loginType === 'signUp' ? "Don't have a JioSaavn account? " : "Already have an account? " }</strong>
                <span className="form-user-type">
                {loginType === 'signUp' ? "Sign Up" : "Log In"}
                </span>
                .
            </p>
            <hr></hr>
        </div>

        <form id="form-input-section">
            <div className="form-welcome-section">
                <h3>Welcome to JioSaavn.</h3>
                <p className="form-welcome-info">
                {loginType === 'signUp'
                    ? "Log in to create playlists, build your library, get personalized recommendations & more!"
                    : "Sign up to create playlists, build your library, get personalized recommendations & more!"}
                </p>
            </div>
            <div className="form-input-field">
                <div className="form-num-input">
                    <img className="country-flag" src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt="country-flag"></img>
                    <input type="number" id="number-input" placeholder="Enter your mobile number" />
                </div>
                <div className="form-btn-field">
                    <button type="submit" className="continue-btn">Continue</button>
                </div>
            </div>
            <p className="form-terms-field">
                Select ‘Continue’ to give consent to JioSaavn’s{" "}
                <a className="terms-page" href="https://www.jiosaavn.com/corporate/terms/" target= "_blank">Terms of Service</a> and acknowledge that you have read and
                understood the <a className="terms-page" href="https://www.jiosaavn.com/corporate/privacy/" target= "_blank">Privacy Policy</a>. An SMS may be sent to
                authenticate your account, and message and data rates may apply.
            </p>   
        </form>
        <div className="form-separator">or connect with</div>
        <div className="form-contact-section">
            <div className="form-contact-email">Email</div>
            <div className="form-contact-facebook">Facebook</div>
        </div>
    </div>
  );
}

export default Form;
