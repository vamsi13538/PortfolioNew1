import React from 'react'
import NavBarH from '../Components/NavBarH'
import { useState } from 'react'
import { useTheme } from '../ThemeContext/ThemeProvider';

const ContactPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`PageContainer ${theme}`}>
      <NavBarH />
      <div className="contactPageCotainer">
        <h3 className={`contactText ${theme}`}>Contact</h3>
        <div className="mapCotainer">
          <iframe className='mapsView' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.6512197265511!2d73.00162236460372!3d19.081102298810137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c130e6b1d5bb%3A0x515e0880d1761624!2sJuhu%20Nagar%2C%20Sector%2014%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703!5e0!3m2!1sen!2sin!4v1725137476234!5m2!1sen!2sin" loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
        <div className="contactFormContainer">
          <h4>Contact Form</h4>
          <form className='contactForm' action="https://formspree.io/f/xblrwddv" method='POST'>
            <div className="nameEmailContainer">
                <div className="nameContainer">
                  <input type="text" name='name' className='textInput' placeholder='' required value={name} onChange={(e) => setName(e.target.value)}/>
                  <label htmlFor="" className={`nameLabel ${theme}`}>Name</label>
                </div>
                <div className="emailContainer">
                  <input type="email" name='email' className='emailInput' placeholder='' required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="" className={`emailLabel ${theme}`}>Email</label>
                </div>
            </div>
              <div className="messageContainer">
                <textarea className='messageTextarea' name='message' cols={30} rows={6} placeholder='' required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label htmlFor="" className={`messageLabel ${theme}`}>
                  Message
                </label>
                <button type="submit" className={`formSubmitBtn ${theme}`}><i className="fa-solid fa-paper-plane"></i>
                &nbsp; Send</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage