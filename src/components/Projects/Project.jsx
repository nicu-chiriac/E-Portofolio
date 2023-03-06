import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
// import './Projects.css';
import ProjectLinks from '../utilityComponents/ProjectLinks';


const Project = ({ img, url, title, description, path, buttonMsg, filterCriteria }) => {

  return (
    <div className="project__container">
      <div className="row">
        <div className="column__1">
          <picture className='img__container'>
            <img src={img} alt="Project interface screenshot"></img>
          </picture>
          <div className="links">
            <BsGithub className='github__button' size={30} onClick={() => window.open(`${url}`, '_blank')} />Source code
          </div>
        </div>
        <div className="column__2">
          <h2>{title}</h2>
          <p>
            {description}
          </p>
          {path.includes('http') ? (
            <a target="_blank" rel="noopener noreferrer" href={path}>
              <button className='button'>{buttonMsg}</button>
            </a>
          ) : (
            <NavLink to={path}>
              <button className='button'>{buttonMsg}</button>
            </NavLink>
          )}
          <ProjectLinks filterCriteria={filterCriteria} />
        </div>
      </div>
    </div>
  )
}

export default Project
