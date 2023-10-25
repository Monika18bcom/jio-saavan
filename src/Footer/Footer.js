import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const topArtist = [
    "Neha Kakkar",
    "Arijit Singh",
    "Badshah",
    "Atif Aslam",
    "Justin Bieber",
    "Himesh Reshammiya",
    "Lata Mangeshkar",
    "Diljit Dosanjh",
    "Ed Sheeran",
    "Shreya Ghoshal",
    "Sanam Puri",
    "Armaan Malik",
  ];

  const topActor = [
    "Salman Khan",
    "Allu Arjun",
    "Sunny Leone",
    "Amitabh Bachchan",
    "Varun Dhawan",
  ];

  const language = [
    "Punjabi Songs",
    "Hindi Songs",
    "Bhojpuri Songs",
    "Tamil Songs",
    "Telugu Songs",
    "Kannada Songs",
    "Gujarati Songs",
    "Marathi Songs",
    "Odia Songs",
    "Rajasthani Songs",
    "Haryanvi Songs",
    "Assamese Songs",
    "Malayalam Songs",
    "Bengali Songs",
  ];

  const devotionalSongs = [
    "Krishna Bhajan",
    "Mahamrityunjaya Mantra",
    "Deva Shree Ganesha",
    "Hanuman Chalisa",
    "Gayatri Mantra",
    "Mata Ke Bhajan",
    "Durga Chalisa",
    "Maiya Yashoda",
    "Bhakti Geet",
  ];

  const browse = [
    "New Releases",
    "Featured Playlists",
    "Weekly Top Songs",
    "Top Artists",
    "Top Charts",
    "Top Radios",
  ];

  const artistOriginals = [
    "Zaeden - Dooriyan",
    "Raghav - Sufi",
    "SIXK - Dansa",
    "Siri - My Jam",
    'Lost Stories, "Mai Ni Meriye"',
  ];
  const company = [
    "About Us",
    "Culture",
    "Blog",
    "Jobs",
    "Press",
    "Advertise",
    "Terms & Privacy",
    "Help & Support",
    "Grievances",
    "JioSaavn Artist Insights",
    "JioSaavn YourCast",
  ];

  const appVersion = [
    "JioSaavn Pro",
    "JioSaavn for iOS",
    "JioSaavn for Android",
    "New Releases",
  ];
  return (
    <div id="footer">
      <div id="footer-main">
        <hr className="footer-line-break"></hr>
        <div className="footer-main-content">
          <div id="footer-top-artists">
            <h5 className="f-title">Top Artists</h5>
            <ul className="f-list">
              {topArtist.map((e, idx) => (
                <li className="f-list-item artist" key={idx}>
                  <a className="f-a-tag">{e}</a>
                </li>
              ))}
            </ul>
          </div>
          <div id="footer-top-actors">
            <h5 className="f-title">Top Actors</h5>
            <ul className="f-list">
              {topActor.map((e, idx) => (
                <li className="f-list-item actor" key={idx}>
                  <a className="f-a-tag">{e}</a>
                </li>
              ))}
            </ul>
            <h5 className="f-title">Browse</h5>
            <ul className="f-list">
              {browse.map((e, idx) => (
                <li className="f-list-item browse" key={idx}>
                  <a className="f-a-tag">{e}</a>
                </li>
              ))}
            </ul>
          </div>
          <div id="footer-devotional-songs">
            <h5 className="f-title">Devotional Songs</h5>
            <ul className="f-list">
              {devotionalSongs.map((e, idx) => (
                <li className="f-list-item devotionalSng" key={idx}>
                  <a className="f-a-tag">{e}</a>
                </li>
              ))}
            </ul>
          </div>
          <div id="footer-language">
            <h5 className="f-title">Language</h5>
            <ul className="f-list">
              {language.map((e, idx) => (
                <li className="f-list-item lang" key={idx}>
                  <a className="f-a-tag">{e}</a>
                </li>
              ))}
            </ul>
          </div>
          <div id="footer-artists-originals">
            <h5 className="f-title">Artist Originals</h5>
            <ul className="f-list">
              {artistOriginals.map((e, idx) => (
                <li className="f-list-item artist-original" key={idx}>
                  <a className="f-a-tag">{e}</a>
                </li>
              ))}
            </ul>
          </div>
          <div id="footer-company">
            <h5 className="f-title">Company</h5>
            <ul className="f-list">
              {company.map((e, idx) => (
                <li className="f-list-item company" key={idx}>
                  <a className="f-a-tag">{e}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="footer-line-break"></hr>
        <div id="footer-app-version">
          {appVersion.map((e, idx) => (
            <p className="f-a-tag" key={idx}>
              {e}
            </p>
          ))}
        </div>
        <hr className="footer-line-break"></hr>
        <div id="footer-icons">
          <p className="footer-copyright">
            &copy; 2023 Saavn Media Limited All rights reserved.
          </p>
          <div className="footer-follow-us">
            <h5 className="footer-follow-us-title">Follow Us</h5>
            <div className="footer-follow-us-icons">
              <span>
                <a href="https://www.facebook.com/JioSaavn" target="_blank">
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    style={{
                      color: "#3b5998",
                      width: "19.3px",
                      height: "24.5px",
                    }}
                  />
                </a>
              </span>
              <span>
                <a href="https://twitter.com/JioSaavn" target="_blank">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{
                      color: "#00acee",
                      width: "19.3px",
                      height: "24.5px",
                    }}
                  />
                </a>
              </span>
              <span>
                <a href="https://www.youtube.com/c/JioSaavn" target="_blank">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{
                      color: "#CD201F",
                      width: "19.3px",
                      height: "24.5px",
                    }}
                  />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/jiosaavn/" target="_blank">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{
                      color: "#d62976",
                      width: "19.3px",
                      height: "24.5px",
                    }}
                  />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/company/jio-saavn/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{
                      color: "#0A66C2",
                      width: "19.3px",
                      height: "24.5px",
                    }}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
