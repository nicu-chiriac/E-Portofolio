import React from 'react';
import './Project1.css';
import img1 from '../../../assets/projects/Project1/img1.png';
import img6 from '../../../assets/projects/Project1/img6.png';
import img6_large from '../../../assets/projects/Project1/img6_large.png';
import img2 from '../../../assets/projects/Project1/img2.png';
import img2_large from '../../../assets/projects/Project1/img2_large.png';
import img3 from '../../../assets/projects/Project1/img3.png';
import img4 from '../../../assets/projects/Project1/img4.png';
import img12 from '../../../assets/projects/Project1/img12.png';
import img8 from '../../../assets/projects/Project1/img8.png';
import img10 from '../../../assets/projects/Project1/img10.png';
import img13 from '../../../assets/projects/Project1/img13.png';
import img5 from '../../../assets/projects/Project1/img5.png';
import img7 from '../../../assets/projects/Project1/img7.png';
import project1_gif from '../../../assets/projects/Project1/project1_gif.gif';
import ModalImage from 'react-modal-image';
import { MdOutlineArrowBack } from 'react-icons/md';
import { HashLink as Link } from 'react-router-hash-link';
import scrollWithOffset from '../../utilityComponents/scroll';
import ScrollToTop from '../../utilityComponents/ScrollToTop';

const Project1 = () => {

  return (
    <ScrollToTop>
      <section className='project container section' id='project1'>
        <h1 className='section__title'>Web Application made with PERN Stack</h1>
        <h2 className='project__subtitle'>React Frontend and Express.js REST API Backend</h2>
        <p className='project__description'>The platform is made to help the process of the administration of bachelor’s degree
          final projects (for students in the 3rd and final year) inside the University Department. </p>
        <picture>
          <img src={img1} alt='Project 1 landing-page' />
          <img src={project1_gif} alt="Project gif" />
        </picture>
        <h2 className='project__subtitle'>Main pages & features</h2>
        <div className="item__containers">
          <div className="item__container first">
            <h2>General features</h2>
            <ul>
              <li>Side navigation bar</li>
              <li>Modals for adding new data (CRUD operations)</li>
              <li>Modals for alerts</li>
            </ul>
            <div className="project__images__grid">
              <ModalImage
                small={img10}
                medium={img10}
                alt="Modal"
                className='project__image'
              />
              <ModalImage
                small={img8}
                medium={img8}
                alt="Side navigation bar"
                className='project__image'
              />
              <ModalImage
                small={img13}
                medium={img13}
                alt="Modal"
                className='project__image'
              />
            </div>
          </div>
          <div className="item__container second">
            <h2>Authentication</h2>
            <ul>
              <li>Register and login pages</li>
              <li>Storing hashed passwords with bcrypt in the database</li>
              <li>JWT Authentication</li>
            </ul>
            <ModalImage
              small={img6}
              medium={img6}
              large={img6_large}
              alt="Register page"
              className='project__image'
            />
          </div>
          <div className="item__container third">
            <h2>Students page</h2>
            <ul>
              <li>Fetching students data and displaying it on a table</li>
              <li>Add, Delete, Update functions</li>
              <li>Search bar</li>
              <li>Import and Export data from CSV files</li>
            </ul>
            <ModalImage
              small={img2}
              medium={img2}
              large={img2_large}
              alt="Student page"
              className='project__image'
            />
          </div>
          <div className="item__container fourth">
            <h2>Bachelor's degree research topics/projects page</h2>
            <ul>
              <li><i>Edit Button</i> that sends the user to <i>Edit Topic Data Page</i></li>
              <li><i>Files Button</i> that send the user to the <i>File Page</i></li>
              <li>Search bar</li>
              <li>Import and Export data from CSV files</li>
              <li>Delete button</li>
            </ul>
            <ModalImage
              small={img3}
              large={img3}
              alt="Student page"
              className='project__image'
            />
          </div>
          <div className="item__container fifth">
            <h2>Files Page</h2>
            <h3>(assigned topic)</h3>
            <ul>
              <li>If a topic has a student allocated, files can be uploaded towards current topic</li>
              <li>Upload function for file types like .pdf, .txt, .csv, .doc etc.</li>
              <li>Files list with <i>download button</i> and <i>delete button</i></li>
            </ul>
            <ModalImage
              small={img4}
              large={img4}
              alt="Files page"
              className='project__image'
            />
          </div>
          <div className="item__container sixth">
            <h2>Files Page</h2>
            <h3>(not assigned topic)</h3>
            <ul>
              <li>If no student was allocated to the current topic, no files can be uploaded</li>
            </ul>
            <ModalImage
              small={img12}
              large={img12}
              alt="Files page"
              className='project__image'
            />
          </div>
          <div className="item__container seventh">
            <h2>Edit Topic Data Page</h2>
            <ul>
              <li>Here is established the relation between students and their coordinating professors</li>
              <li>Form Update with topic description, student, professor and status fields</li>
              <li>Edit button that pop's up a search bar modal for students / professors</li>
            </ul>
            <ModalImage
              small={img5}
              large={img5}
              alt="Files page"
              className='project__image'
            />
          </div>
          <div className="item__container eight">
            <h2>Admin page</h2>
            <ul>
              <li>List of all users</li>
              <li>Admin can promote/demote users</li>
              <li>Admin can delete accounts</li>
            </ul>
            <ModalImage
              small={img7}
              large={img7}
              alt="Files page"
              className='project__image'
            />
          </div>
          <Link smooth to='/E-Portofolio/#projects' scroll={scrollWithOffset}>
            <button className='project1__button'>
              <MdOutlineArrowBack size={30} />
            </button>
          </Link>
        </div>
      </section>
    </ScrollToTop>
  )
}

export default Project1
