import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div id='footer'>
        <div id='footer-main'>
          <hr className='footer-line-break'></hr>
          <div className='footer-main-content'>
            <div id='footer-top-artists'>
              <h5 className='f-title'>Top Artists</h5>
              <ul className='f-list'>
                <li className='f-list-item artist'><a className='f-a-tag'>Neha Kakkar</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Arijit Singh</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Badshah</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Atif Aslam</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Justin Bieber</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Himesh Reshammiya</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Lata Mangeshkar</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Diljit Dosanjh</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Ed Sheeran</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Shreya Ghoshal</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Sanam Puri</a></li>
                <li className='f-list-item artist'><a className='f-a-tag'>Armaan Malik</a></li>
              </ul>
            </div>
            <div id='footer-top-actors'>
              <h5 className='f-title'>Top Actors</h5>
              <ul className='f-list'>
                <li className='f-list-item actor'><a className='f-a-tag'>Salman Khan</a></li>
                <li className='f-list-item actor'><a className='f-a-tag'>Allu Arjun</a></li>
                <li className='f-list-item actor'><a className='f-a-tag'>Sunny Leone</a></li>
                <li className='f-list-item actor'><a className='f-a-tag'>Amitabh Bachchan</a></li>
                <li className='f-list-item actor'><a className='f-a-tag'>Varun Dhawan</a></li>
              </ul>
              <h5 className='f-title'>Browse</h5>
              <ul className='f-list'>
                <li className='f-list-item browse'><a className='f-a-tag'>New Releases</a></li>
                <li className='f-list-item browse'><a className='f-a-tag'>Featured Playlists</a></li>
                <li className='f-list-item browse'><a className='f-a-tag'>Weekly Top Songs</a></li>
                <li className='f-list-item browse'><a className='f-a-tag'>Top Artists</a></li>
                <li className='f-list-item browse'><a className='f-a-tag'>Top Charts</a></li>
                <li className='f-list-item browse'><a className='f-a-tag'>Top Radios</a></li>
              </ul>
            </div>
            <div id='footer-devotional-songs'>
              <h5 className='f-title'>Devotional Songs</h5>
              <ul className='f-list'>
                <li className='f-list-item devotionalSng'><a className='f-a-tag'>Krishna Bhajan</a></li>
                <li className='f-list-item devotionalSng'><a className='f-a-tag'>Mahamrityunjaya Mantra</a></li>
                <li className='f-list-item devotionalSng'><a className='f-a-tag'>Deva Shree Ganesha</a></li>
                <li className='f-list-item devotionalSng'><a className='f-a-tag'>Hanuman Chalisa</a></li>
                <li className='f-list-item devotionalSng'><a className='f-a-tag'>Gayatri Mantra</a></li>
                <li className='f-list-item devotionalSng'><a className='f-a-tag'>Mata Ke Bhajan</a></li>
                <li className='f-list-item devotionalSng'><a className='f-a-tag'>Durga Chalisa</a></li>
                <li className='f-list-item devotionalSng'><a className='f-a-tag'>Maiya Yashoda</a></li>
                <li className='f-list-item devotionalSng'><a className='f-a-tag'>Bhakti Geet</a></li>
              </ul>
            </div>
            <div id='footer-language'>
              <h5 className='f-title'>Language</h5>
              <ul className='f-list'>
                <li className='f-list-item lang'><a className='f-a-tag'>Punjabi Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Hindi Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Bhojpuri Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Tamil Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Telugu Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Kannada Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Gujarati Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Marathi Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Odia Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Rajasthani Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Haryanvi Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Assamese Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Malayalam Songs</a></li>
                <li className='f-list-item lang'><a className='f-a-tag'>Bengali Songs</a></li>              
              </ul>
            </div>
            <div id='footer-artists-originals'>
              <h5 className='f-title'>Artist Originals</h5>
              <ul className='f-list'>
                <li className='f-list-item artist-original'><a className='f-a-tag'>Zaeden - Dooriyan</a></li>
                <li className='f-list-item artist-original'><a className='f-a-tag'>Raghav - Sufi</a></li>
                <li className='f-list-item artist-original'><a className='f-a-tag'>SIXK - Dansa</a></li>
                <li className='f-list-item artist-original'><a className='f-a-tag'>Siri - My Jam</a></li>
                <li className='f-list-item artist-original'><a className='f-a-tag'>Lost Stories, "Mai Ni Meriye"</a></li>
              </ul>
            </div>
            <div id='footer-company'>
              <h5 className='f-title'>Company</h5>
              <ul className='f-list'>
                <li className='f-list-item company'><a className='f-a-tag'>About Us</a></li>
                <li className='f-list-item company'><a className='f-a-tag'>Culture</a></li>
                <li className='f-list-item company'><a className='f-a-tag'>Blog</a></li>
                <li className='f-list-item company'><a className='f-a-tag'>Jobs</a></li>
                <li className='f-list-item company'><a className='f-a-tag'>Press</a></li>
                <li className='f-list-item company'><a className='f-a-tag'>Advertise</a></li>
                <li className='f-list-item company'><a className='f-a-tag'>Terms & Privacy</a></li>
                <li className='f-list-item company'><a className='f-a-tag'>Help & Support</a></li>
                <li className='f-list-item company'><a className='f-a-tag'>Grievances</a></li>
                <li className='f-list-item company'><a className='f-a-tag'>JioSaavn Artist Insights</a></li>
                <li className='f-list-item company'><a className='f-a-tag'>JioSaavn YourCast</a></li>
              </ul>
            </div>
          </div>
          <hr className='footer-line-break'></hr>
          <div id='footer-app-version'>
            <a className='f-a-tag'>JioSaavn Pro</a>
            <a className='f-a-tag'>JioSaavn for iOS</a>
            <a className='f-a-tag'>JioSaavn for Android</a>
            <a className='f-a-tag'>New Releases</a>
          </div>
          <hr className='footer-line-break'></hr>
          <div id='footer-icons'>
            <p className='footer-copyright'>&copy; 2023 Saavn Media Limited All rights reserved.</p>
            <div className='footer-follow-us'>
              <h5 className='footer-follow-us-title'>Follow Us</h5>
              <div className='footer-follow-us-icons'>
                <span><a href='https://www.facebook.com/JioSaavn' target='_blank'><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#3b5998",width:'19.3px',height:'24.5px'}} /></a></span>
                <span><a href='https://twitter.com/JioSaavn' target='_blank'><FontAwesomeIcon icon={faTwitter} style={{color: "#00acee",width:'19.3px',height:'24.5px'}} /></a></span>
                <span><a href='https://www.youtube.com/c/JioSaavn' target='_blank'><FontAwesomeIcon icon={faYoutube} style={{color: "#CD201F",width:'19.3px',height:'24.5px'}}/></a></span>
                <span><a href='https://www.instagram.com/jiosaavn/' target='_blank'><FontAwesomeIcon icon={faInstagram} style={{color: "#d62976",width:'19.3px',height:'24.5px'}} /></a></span>
                <span><a href='https://www.linkedin.com/company/jio-saavn/' target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{color: "#0A66C2",width:'19.3px',height:'24.5px'}} /></a></span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer

