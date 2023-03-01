import React from 'react';
import './Education.css';
import bg_photo_1 from './../../assets/unirea.jpg';
import bg_photo_2 from './../../assets/fiir.jpg';
import bg_photo_3 from './../../assets/acs.jpg';
import logo_1 from './../../assets/SiglaCNU.png';
import logo_2 from './../../assets/fiir-logo.png';
import logo_3 from './../../assets/politehnica.png';
import logo_4 from './../../assets/acs-logo-ro.png';
import Fade from 'react-reveal/Fade';


const Education = () => {
  return (
    <section className='education section timeline' id="education">
      <h1 className='section__title container'>Education</h1>
      <div className="container">
        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url(${bg_photo_1})` }}></div>
          <div className='tl-name'>
            <h2>College</h2>
          </div>
          <div className="tl-year">
            <p>2018</p>
          </div>
          <Fade bottom delay={500}>
            <div className="tl-content">
              <h1>"Unirea" National College</h1>
              <h2>-Mathematics and Informatics-</h2>
              <p>The most prestigious college in Focșani, my hometown. The college gaved me a solid ground in technical knowledge: Math, Physics, Informatics. Made allot of friendships and had many fun activities during the period of 4 years.</p>
              <div className='logos'>
                <img src={logo_1} alt="Logo"></img>
              </div>
            </div>
          </Fade>
        </div>
        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url(${bg_photo_2})` }}></div>
          <div className='tl-name'>
            <h2>Bachelor's Degree</h2>
          </div>
          <div className="tl-year">
            <p>2022</p>
          </div>
          <Fade bottom delay={1000}>
            <div className="tl-content">
              <h1>Faculty of Industrial Engineering and Robotics</h1>
              <h2>-Informatics in Industrial Engineering-</h2>
              <p>Here I managed, through the various subjects learned, to form an engineering way of thinking. The curriculum consisted of subjects such as: Computer programming, Databases, Web Interfaces and Services, Virtual Reality Systems, Communications in computer networks and others related to mechanics, electronics, CAD Systems etc. </p>
              <div className='logos'>
                <img src={logo_3} alt="Logo"></img>
                <img src={logo_2} alt="Logo"></img>
              </div>
            </div>
          </Fade>
        </div>
        <div className="tl-item">
          <div className="tl-bg" style={{ backgroundImage: `url(${bg_photo_3})` }}></div>
          <div className='tl-name'>
            <h2>Master's Degree</h2>
          </div>
          <div className="tl-year">
            <p>2022-2024</p>
          </div>
          <Fade bottom delay={1500}>
            <div className="tl-content">
              <h1>Faculty of Automatic Control and Computer Science</h1>
              <h2>-Engineering in Internet Systems-</h2>
              <p>The Master's program focuses on the design and development of
                computer systems that are based, on the one hand, on the methods of representation, search, processing and use
                of knowledge (natural language processing, machine learning, ontologies, semantic web) and, on the other hand, on distributed system technologies (Internet and Web). </p>
              <div className='logos'>
                <img src={logo_3} alt="Logo"></img>
                <img src={logo_4} alt="Logo"></img>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="custom-shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  )
}

export default Education
