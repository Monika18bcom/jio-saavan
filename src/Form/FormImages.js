import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../img/jio-saavn-white-logo.png";
import './FormImages.css'


function FormImages() {

    const imageArr = [
    {
        src: "https://staticfe.saavn.com/web6/jioindw/dist/1695272228/_i/artist/A.R.Rahman.png",
        bg: "rgb(49,92,134)",
        color: "rgb(83,155,218)",
    },
    {
        src: "https://staticfe.saavn.com/web6/jioindw/dist/1695272228/_i/artist/ArijitSingh.png",
        bg: "rgb(24,32,50)",
        color: "rgb(71,88,125)",
    },
    {
        src: "https://staticfe.saavn.com/web6/jioindw/dist/1695272228/_i/artist/KaurB.png",
        bg: "rgb(186,96,83)",
        color: "rgb(244,177,153)",
    },
    {
        src: "https://staticfe.saavn.com/web6/jioindw/dist/1695272228/_i/artist/Nucleya.png",
        bg: "rgb(63,66,76)",
        color: "rgb(116,121,140)",
    },
    {
        src: "https://staticfe.saavn.com/web6/jioindw/dist/1695272228/_i/artist/JustinBieber.png",
        bg: "rgb(58,38,25)",
        color: "rgb(136,85,62)",
    },
    {
        src: "https://staticfe.saavn.com/web6/jioindw/dist/1695272228/_i/artist/ShreyaGhoshal.png",
        bg: "rgb(100,60,106)",
        color: "rgb(193,116,205)",
    },
    {
        src: "https://staticfe.saavn.com/web6/jioindw/dist/1695272228/_i/artist/Badshah.png",
        bg: "rgb(213,129,53)",
        color: "rgb(242,216,90)",
    },
    {
        src: "https://staticfe.saavn.com/web6/jioindw/dist/1695272228/_i/artist/AtifAslam.png",
        bg: "rgb(113,64,96)",
        color: "rgb(208,118,177)",
    },
    {
        src: "https://staticfe.saavn.com/web6/jioindw/dist/1695272228/_i/artist/Jay-Z.png",
        bg: "rgb(21,31,36)",
        color: "rgb(72,97,91)",
    },
    {
        src: "https://staticfe.saavn.com/web6/jioindw/dist/1695877539/_i/artist/YoYoHoneySingh.png",
        bg: "rgb(120,37,59)",
        color: "rgb(210,65,103)",
    },
    ];

    const [randomImgIdx, setRandomImgIdx] = useState(null);

    useEffect(() => {
        setRandomImgIdx(Math.floor(Math.random() * (imageArr?.length - 1)));
    }, []);




  return (
    <div className="login-left-section" style={{ background: imageArr[randomImgIdx]?.bg }}>
        <div className="login-logo-container">
            <NavLink to="/">
            <div className="login-logo">
                <img className="login-logo-img" src={logo} alt="logo-image"></img>
                <h1 className="login-logo-title">JioSaavn</h1>
            </div>
            </NavLink>
        </div>
        <div className="login-image-content">
            <img className="login-image" src={imageArr[randomImgIdx]?.src}></img>
            <h2 className="login-content1">All Your Music.</h2>
            <h4 className="login-content2" style={{ color: imageArr[randomImgIdx]?.color }}>Anytime, anywhere.</h4>
        </div>
    </div>
  )
}

export default FormImages