import React from 'react'
import NavBarH from '../Components/NavBarH'
import ProjectCard from '../Components/ProjectCard'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useTheme } from '../ThemeContext/ThemeProvider';


const PortfolioPage = () => {

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] =  useState('All');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
      fetch('\projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((err) => console.log("Error: "+err));
  },[])

  useEffect(() => {
    filterProjects()
  },[selectedCategory]);

  const filterProjects = () => {
    if(selectedCategory === "All"){
      setFilteredProjects(projects);
    }else{
      const filtered = projects.filter((project) => project.type === selectedCategory);
      setFilteredProjects(filtered);
    }
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setSelectedCategory(category);
  }

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`PortfolioPageMainContainer ${theme}`}>
        <NavBarH />
        <div className="portfolioPageContainer">
          <h2 className={`PortfolioHeadingText ${theme}`}>Projects</h2>
          <div className="portfolioNavbar">
            <li><NavLink to="#All" onClick={() => handleCategoryClick('All')} className={activeCategory === 'All' ? 'activeBg' : 'unactiveBg'}>All</NavLink></li>
            <li><NavLink to="#JavaScript" onClick={() => handleCategoryClick('javaScript_P')} className={activeCategory === 'javaScript_P' ? 'activeBg' : 'unactiveBg'}>JavaScript <span className='applicationsText'>Applications</span></NavLink></li>
            <li><NavLink to="#React" onClick={() => handleCategoryClick('react_P')} className={activeCategory === 'react_P' ? 'activeBg' : 'unactiveBg'}>React <span className='applicationsText'>Applications</span></NavLink></li>
            <li><NavLink to="#Jquery" onClick={() => handleCategoryClick('jQuery_P')} className={activeCategory === 'jQuery_P' ? 'activeBg' : 'unactiveBg'}>JQuery <span className='applicationsText'>Applications</span></NavLink></li>
            <li><NavLink to="#Others" onClick={() => handleCategoryClick('others_P')} className={activeCategory === 'others_P' ? 'activeBg' : 'unactiveBg'}>Others <span className='applicationsText'>Applications</span></NavLink></li>
          </div>
          <div className={`projectResultsContainer ${theme}`}>
          {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                name={project.name}
                url={project.url}
                downloadUrl={project.downloadUrl}
                type={project.type}
              />
            ))}
          </div>
        </div>
    </div>
  )
}

export default PortfolioPage