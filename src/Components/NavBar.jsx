import React from 'react'
import { useTheme } from '../ThemeContext/ThemeProvider'

const NavBar = () => {
   const {theme, toggleTheme} = useTheme();
  return (
    <>
    <div className={`navBarContainer ${theme}`}>
        <div className="navBarHeader">
            <div className="imageContainer">
                <img src="/Images/Profile_02.webp" alt="No_Image" />
            </div>
            <p className="nameText">Vamsi Mannepalli</p>
            <p className="positionText">Full Stack Web Developer</p>
        </div>
        <div className="navBarFooter">
            <div className='contactInfoCardMainContainer'>
                <div className="contactInfoCard">
                    <div id='contactIcon' className=''>
                        <i className={`fa-regular fa-envelope ${theme}`} ></i>
                    </div>
                    <div className="contactInfoText">
                        <p className={`contactInfoLabel ${theme}`}>Email</p>
                        <p className='contactInfoEmail' id='contactInfoEmail'>
                            <span className="emailText">m.vamsim23@gmail.com
                            </span>
                        </p>
                    </div>
                </div>
                <div className="contactInfoCard">
                    <div id='contactIcon'>
                    <i className={`fa-solid fa-phone ${theme}`}></i>
                    </div>
                    <div className="contactInfoText">
                        <p className={`contactInfoLabel ${theme}`}>Phone</p>
                        <p className='contactInfoEmail'>
                            <span className="emailText">+919398513050</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='contactInfoCardMainContainer'>
                <div className="contactInfoCard" id='birthdayCard'>
                    <div id='contactIcon'>
                    <i className={`fa-solid fa-cake-candles ${theme}`}></i>
                    </div>
                    <div className="contactInfoText">
                        <p className={`contactInfoLabel ${theme}`}>Birthday</p>
                        <p className='contactInfoEmail'>
                            <span className="emailText">July 18, 2001</span>
                        </p>
                    </div>
                </div>
                <div className="contactInfoCard" id='locationCard'>
                    <div id='contactIcon'>
                    <i className={`fa-solid fa-location-dot ${theme}`}></i>
                    </div>
                    <div className="contactInfoText">
                        <p className={`contactInfoLabel ${theme}`}>Location</p>
                        <p className='contactInfoEmail'>
                            <span className="emailText">Vashi, Navi Mumbai, India</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="contactIcons">
                <li>
                    <a href='https://www.linkedin.com/in/VamsiM13538/' target='_blank'>
                        <i className={`fa-brands fa-linkedin ${theme}`}></i>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/vamsi13538' target='_blank'>
                        <i className={`fa-brands fa-github ${theme}`}></i>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/vamsi_13_5_3_8/' target='_blank'>
                        <i className={`fa-brands fa-instagram ${theme}`}></i>
                    </a>
                </li>
                <li className='mailIcon'>
                    <a href='mailto:m.vamsim23@gmail.com' target='_blank'>
                        <i className={`fa-solid fa-envelope ${theme}`}></i>
                    </a>
                </li>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar