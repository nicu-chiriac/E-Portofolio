import React from 'react';
import './Projects.css';
import project1Img from './../../assets/projects/Project1/img1.png';
import project2Img from './../../assets/projects/Project2/img1.png';
import project3Img from './../../assets/projects/Project3/img1.png';
import project5Img from './../../assets/projects/Project5/img1.png';
import Project from './Project';

const Projects = () => {

  return (
    <section className='projects' id="projects">
      <div className="container">
        <h1 className='section__title'>
          Projects
        </h1>
        <Project
          img={project1Img}
          url='https://github.com/nicu-chiriac/Proiect-Licenta'
          title="Web Application made with PERN Stack"
          description="React Frontend and Express.js REST API Backend. The platform is made to help the process of the administration of bachelor’s degree final projects inside the University Department. It can keep track of students, their bachelor’s degree final topics/projects and files,their coordinating professors, status etc. It has different types of permissions for Admin, professors (super-user), students (users)."
          path='/E-Portofolio/project1'
          buttonMsg="SEE MORE"
          filterCriteria="['HTML5', 'CSS3', 'Bootstrap', 'React', 'JavaScript', 'NodeJS', 'Express', 'PostgreSQL']"
        />
        <Project
          img={project2Img}
          url='https://github.com/nicu-chiriac/Restaurant-Website-Breakfast-Station-319'
          title="Restaurant Website"
          description="A presentational Website for an existing
          restaurant. The app provides to customers the possibility to access the
          menu, location, contact details, social media news etc. This project uses
          React, SASS. It has a fully responsive design(using both Flexbox and
          Grid)."
          path='https://nicu-chiriac.github.io/Restaurant-Website-Breakfast-Station-319/'
          buttonMsg="SEE LIVE"
          filterCriteria="['HTML5', 'CSS3', 'SAAS', 'React', 'JavaScript']"
        />
        <Project
          img={project5Img}
          url='https://github.com/nicu-chiriac/RestaurantApp'
          title="RestaurantApp"
          description="The previous Restaurant Website, but this time with an added Backend using Python's framework - Flask. The website turns into an frontend - backend app. Now the products are automatically added from a database. The app has an Auth system made with JWT (JSON Web Token) with 3 different roles and permissions who can perform CRUD operations on the products. It also has a Swagger documentation available."
          path='/E-Portofolio/project5'
          buttonMsg="SEE MORE"
          filterCriteria="['HTML5', 'CSS3', 'Bootstrap', 'React', 'JavaScript', 'Python', 'Flask', 'PostgreSQL']"
        />
        <Project
          img={project3Img}
          url='https://github.com/nicu-chiriac/E-Portofolio'
          title="E-Portofolio"
          description="This is my personal E-Portofolio. It is made with React and SASS. It has a fully responsive design(using both Flexbox and Grid)."
          path='https://nicu-chiriac.github.io/E-Portofolio/'
          buttonMsg="YOU ARE HERE😊"
          filterCriteria="['HTML5', 'CSS3', 'SAAS', 'React', 'JavaScript']"
        />
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
