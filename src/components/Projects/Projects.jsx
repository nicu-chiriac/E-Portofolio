import React from 'react';
import './Projects.css';
import project1Img from './../../assets/projects/Project1/img1.png';
import project2Img from './../../assets/projects/Project2/img1.png';
import { BsGithub } from 'react-icons/bs';
import items from './../../assets/items/items';

const Projects = () => {
  return (
    <section className='projects container section'>
      <h1 className='section__title'>
        Projects
      </h1>
      <div className="project__container">
        <div className="row">
          <div className="column__1">
            <picture className='img__container'>
              <img src={project1Img} alt="Project1 interface screenshot"></img>
            </picture>
            <div className="links">
              <BsGithub size={30} onClick={() => window.open('https://www.google.com', '_blank')} />
              <a href='#unavailable'>
                <button className='button'>See live</button>
              </a>
            </div>
          </div>
          <div className="column__2">
            <h2>Web Application : Bachelor's degree administration platform </h2>
            <p>Complex Web-App made for my Faculty department in order to keep track of students, their
              bachelor’s degree final projects and files,their coordinating teachers,
              status etc. It also has different types of permissions for Admin, teachers,
              students. Client-Server architecture App made with PERN
              stack(PostgreSQL, Express, Node, React).
            </p>
            <a href='#unavailable'>
              <button className='button'>SEE MORE</button>
            </a>
            <div className="links">
              <h3>Stack used:</h3>
              {items.filter((item) =>
                item.name === 'HTML5' ||
                item.name === 'CSS3' ||
                item.name === 'Bootstrap' ||
                item.name === 'React' ||
                item.name === 'JavaScript' ||
                item.name === 'NodeJS' ||
                item.name === 'Express' ||
                item.name === 'PostgreSQL'
              )
                .map((item) => (
                  <div className="item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="project__container">
        <div className="row">
          <div className="column__1">
            <picture className='img__container'>
              <img src={project2Img} alt="Project1 interface screenshot"></img>
            </picture>
            <div className="links">
              <BsGithub size={30} onClick={() => window.open('https://www.google.com', '_blank')} />
              <a href='#unavailable'>
                <button className='button'>See live</button>
              </a>
            </div>
          </div>
          <div className="column__2">
            <h2>Restaurant Website</h2>
            <p>A presentational Website for an existing
              restaurant. The app provides to customers the possibility to access the
              menu, location, contact details, social media news etc. This project uses
              React, SASS. It has a fully responsive design(using both Flexbox and
              Grid).
            </p>
            <a href='#unavailable'>
              <button className='button'>SEE MORE</button>
            </a>
            <div className="links">
              <h3>Stack used:</h3>
              {items.filter((item) =>
                item.name === 'HTML5' ||
                item.name === 'CSS3' ||
                item.name === 'SASS' ||
                item.name === 'React' ||
                item.name === 'JavaScript' ||
                item.name === 'Figma'
              )
                .map((item) => (
                  <div className="item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
