import React from 'react'
import { useTheme } from '../ThemeContext/ThemeProvider'

const ProjectCard = ({image, url, name, downloadUrl, type}) => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`projectCardContainer ${type}`}>
        <div className="imageContainer">
            <img src={image} alt="No_Image" />
        </div>
        <div className="cardBody">
            <p className="cardTitle">{name}</p>
            <p className={`cardIcons ${theme}`}>
                <a href={url} target='_blank' title='View'><i className="fa-solid fa-eye"></i></a>
                <a href={downloadUrl} title='Download'><i className="fa-solid fa-download"></i></a>
            </p>
        </div>
    </div>
  )
}

export default ProjectCard