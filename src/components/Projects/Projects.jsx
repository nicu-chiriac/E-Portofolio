import React from 'react';
import './Projects.css';
import project1Img from './../../assets/projects/Project1/img1.png';
import project2Img from './../../assets/projects/Project2/img1.png';
import project3Img from './../../assets/projects/Project3/img1.png';
import project4Img from './../../assets/projects/Project4/img1.png';
import project5Img from './../../assets/projects/Project5/img1.png';
import { BsGithub } from 'react-icons/bs';
import items from './../../assets/items/items';
import { NavLink } from 'react-router-dom';

const Projects = () => {

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <section className='projects' id="projects">
      <div className="container">
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
                <BsGithub className='github__button' size={30} onClick={() => window.open('https://github.com/nicu-chiriac/Proiect-Licenta', '_blank')} />Source code
              </div>
            </div>
            <div className="column__2">
              <h2>Web Application made with PERN Stack</h2>
              <p>React Frontend and Express.js REST API Backend. The platform is made to help
                the process of the administration of bachelor’s
                degree final projects inside the University Department. It can keep track of students, their
                bachelor’s degree final topics/projects and files,their coordinating professors,
                status etc. It has different types of permissions for Admin, professors (super-user),
                students (users).
              </p>
              <NavLink to='/project1' scrollTo={scrollWithOffset}>
                <button className='button'>SEE MORE</button>
              </NavLink>
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
                <img src={project2Img} alt="Project2 interface screenshot"></img>
              </picture>
              <div className="links">
                <BsGithub className='github__button' size={30} onClick={() => window.open('https://github.com/nicu-chiriac/Restaurant-Website-Breakfast-Station-319', '_blank')} />Source code
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
              <a target="_blank" rel="noopener noreferrer" href='https://nicu-chiriac.github.io/Restaurant-Website-Breakfast-Station-319/'>
                <button className='button'>SEE LIVE</button>
              </a>
              <div className="links">
                <h3>Stack used:</h3>
                {items.filter((item) =>
                  item.name === 'HTML5' ||
                  item.name === 'CSS3' ||
                  item.name === 'SASS' ||
                  item.name === 'React' ||
                  item.name === 'JavaScript'
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
                <img src={project5Img} alt="Project5 Swagger REST API interface screenshot"></img>
              </picture>
              <div className="links">
                <BsGithub className='github__button' size={30} onClick={() => window.open('https://github.com/nicu-chiriac/RestaurantApp', '_blank')} />Source code
              </div>
            </div>
            <div className="column__2">
              <h2>RestaurantApp</h2>
              <p> The previous Restaurant Website, but this time with an added Backend using Python's framework - Flask. The website turns into an frontend - backend app. Now the products are automatically added from a database. The app has an Auth system made with JWT (JSON Web Token) with 3 different roles and permissions who can perform CRUD operations on the products. It also has a Swagger documentation available.
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
                  item.name === 'Python' ||
                  item.name === 'Flask' ||
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
                <img src={project3Img} alt="Project3 interface screenshot"></img>
              </picture>
              <div className="links">
                <BsGithub className='github__button' size={30} onClick={() => window.open('https://github.com/nicu-chiriac/E-Portofolio', '_blank')} />Source code
              </div>
            </div>
            <div className="column__2">
              <h2>E-Portofolio</h2>
              <p>My personal digital portofolio made as a more interactive way to present and keep track of my work. The work on this project focused on responsive web design, using :root CSS variables, layouts and reusable classes.
              </p>
              <a href='#unavailable'>
                <button className='button disabled'>YOU ARE HERE 😊</button>
              </a>
              <div className="links">
                <h3>Stack used:</h3>
                {items.filter((item) =>
                  item.name === 'HTML5' ||
                  item.name === 'CSS3' ||
                  item.name === 'React' ||
                  item.name === 'JavaScript'
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
                <img src={project4Img} alt="Project3 interface screenshot"></img>
              </picture>
              <div className="links">
                <BsGithub className='github__button' size={30} onClick={() => window.open('https://github.com/nicu-chiriac/facerecognitionapp', '_blank')} />Source code
              </div>
            </div>
            <div className="column__2">
              <h2>Face Recognition App</h2>
              <p> Frontend - Backend Web App that uses a Clarify API for face detection on an image URL. Project made through the Zero to Hero : Complete Web Developer Udemy Course.
              </p>
              <a href='#unavailable'>
                <button className='button'>SEE MORE</button>
              </a>
              <div className="links">
                <h3>Stack used:</h3>
                {items.filter((item) =>
                  item.name === 'HTML5' ||
                  item.name === 'CSS3' ||
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
      </div>
      <div className="custom-shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  )
}

export default Projects
