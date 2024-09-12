import React, { useState } from 'react'
import NavBarH from '../Components/NavBarH'
import { useTheme } from '../ThemeContext/ThemeProvider';

const ResumePage = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`PageContainer ${theme}`}>
        <NavBarH />
        <div className="resumePageContainer">
          <h2 className={`resumePageText ${theme}`}>Resume</h2>
          <button className={`resumeDownloadBtn ${theme}`} title='Download Resume'>
              <a 
              href="public\Vamsi Manepalli.pdf"
              download={"Vamsi Mannepalli"}>
              <i className="fa-solid fa-download"></i> Resume
              </a>
          </button>
            <div className="resumePageEducation">
              <h3 className='headingText'><i className="fa-solid fa-user-graduate"></i>&nbsp;&nbsp;&nbsp;Education</h3>
              <div className="educationInfoContainer">
                  <div className={`educationBody ${theme}`}>
                    <p className="collegeName">Sree Venkateswara College Of Engineering</p>
                    <p className={`graduationTime ${theme}`}>2019 - 2022</p>
                    <p className="aboutCollege"><i>B.Tech (Mechanical Engineering) - 8.0 GPA</i></p>
                  </div>
                  <div className={`educationBody ${theme}`}>
                    <p className="collegeName">Sree Venkateswara College Of Engineering</p>
                    <p className={`graduationTime ${theme}`}>2016 - 2019</p>
                    <p className="aboutCollege"><i>Diploma (Mechanical Engineering) - 8.6 GPA</i></p>
                  </div>
                  <div className={`educationBody ${theme}`}>
                    <p className="collegeName">AIMS Vidyaniketan E.M High School</p>
                    <p className={`graduationTime ${theme}`}>2015-2016</p>
                    <p className="aboutCollege"><i>X Standard - 7.2 GPA</i></p>
                  </div>
              </div>
              <div className="educationTrackerBorder">
                {/* <i class="fa-solid fa-user-graduate" id='educationIcon'></i> */}
              </div>
            </div>
        </div>
        <div className="workExperienceText">
        <h3 className='headingText'><i className="fa-solid fa-briefcase"></i>&nbsp;&nbsp;&nbsp;Work Experience</h3>
        </div>
        <div className="workExpereinceInfo">
                <p className="workPositonName">Data Research Analyst</p>
                <p className={`workDuration ${theme}`}>Dec 12, 2022 - Present</p>
                <p className="aboutRole">As a Data Research Analyst at Morningstar, I specialized in transforming raw data into actionable insights to support data-driven decision-making. My role involved conducting in-depth data analysis, identifying key trends, and delivering valuable insights to clients. I was recognized for my dedication to accuracy and performance, receiving awards for my contributions and commitment to excellence.</p>
                <p className='aboutRole'>
                In addition to my data analysis responsibilities, I also developed web applications to streamline processes and enhance both efficiency and work quality. These projects played a key role in automating tasks and improving the overall productivity of the team.
                </p>
          </div>
        <div className="skillsContainer">
          <div className="skillsHeadingText">
            <h3>My Skills</h3>
          </div>
          <div className="skillsBody">
              <p className="skillLabel">
                Java <span className='sillPercentageText'><i>(80%)</i></span>
              </p>
              <p className={`skillProgressBar ${theme}`}>
                <span className={`skillProgress ${theme}`} id='javaSkill'></span>
              </p>
              <p className="skillLabel">
                JavaScript <span className='sillPercentageText'><i>(90%)</i></span>
              </p>
              <p className={`skillProgressBar ${theme}`}>
                <span className={`skillProgress ${theme}`} id='javaScriptSkill'></span>
              </p>
              <p className="skillLabel">
                Full-Stack Front End Web Development <span className='sillPercentageText'><i>(95%)</i></span>
              </p>
              <p className={`skillProgressBar ${theme}`}>
                <span className={`skillProgress ${theme}`} id='fullStackSkill'></span>
              </p>
              <p className="skillLabel">
                MS SQL <span className='sillPercentageText'><i>(85%)</i></span>
              </p>
              <p className={`skillProgressBar ${theme}`}>
                <span className={`skillProgress ${theme}`} id='msSqlSkill'></span>
              </p>
              <p className="skillLabel">
                Bootstrap <span className='sillPercentageText'><i>(80%)</i></span>
              </p>
              <p className={`skillProgressBar ${theme}`}>
                <span className={`skillProgress ${theme}`} id='bootstrapSkill'></span>
              </p>
              <p className="skillLabel">
                SpringBoot <span className='sillPercentageText'><i>(65%)</i></span>
              </p>
              <p className={`skillProgressBar ${theme}`}>
                <span className={`skillProgress ${theme}`} id='springBootSkill'></span>
              </p>
              <p className="skillLabel">
                React <span className='sillPercentageText'><i>(70%)</i></span>
              </p>
              <p className={`skillProgressBar ${theme}`}>
                <span className={`skillProgress ${theme}`} id='reactSkill'></span>
              </p>
              <p className="skillLabel">
                JQuery <span className='sillPercentageText'><i>(80%)</i></span>
              </p>
              <p className={`skillProgressBar ${theme}`}>
                <span className={`skillProgress ${theme}`} id='jquerySkill'></span>
              </p>
          </div>
        </div>
        {/* <div style={{height: '200px'}}></div> */}
    </div>
  )
}

export default ResumePage

