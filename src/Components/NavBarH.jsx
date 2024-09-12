import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../ThemeContext/ThemeProvider';

const NavBarH = () => {

  const linkActiveClass = ({isActive}) => isActive ? 'activeBg' : 'unactiveBg';
  
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`navBarHcontainer ${theme}`}>
        <div className={`themButtonContainer ${theme}`}>
            <button title='Light' 
            className={`button ${theme === 'lightTheme' ? 'active' : ''}`} 
            onClick={() => toggleTheme('lightTheme')}><i className="fa-solid fa-sun"></i></button>&nbsp;
            <button title='Dark'
            className={`button ${theme === 'darkTheme' ? 'active' : ''}`}
            onClick={() => toggleTheme('darkTheme')}><i className="fa-solid fa-moon"></i></button>
        </div>
        <div className={`navBarHListContainer ${theme}`}>
            <li><NavLink to="/PortfolioNew1/" className={linkActiveClass} end>Home</NavLink></li>
            <li><NavLink to="/PortfolioNew1/resume" className={linkActiveClass}>Resume</NavLink></li>
            <li><NavLink to="/PortfolioNew1/projects" className={linkActiveClass}>Projects</NavLink></li>
            <li><NavLink to="/PortfolioNew1/contact" className={linkActiveClass}>Contact</NavLink></li>
        </div>
    </div>
  )
}

export default NavBarH