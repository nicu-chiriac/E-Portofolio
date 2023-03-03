import React from 'react';
import aboutImg from './../../assets/myself.jpg';
import './About.css';
import ResumePDF from '../../assets/Resume Chiriac Nicu Manuel.pdf';

const About = () => {
  return (
    <section className='about section' id="about">
      <div className="container">
        <div className="row">
          <div className="column">
            <h1 className='section__title'>About me</h1>
            <h2 className='section__subtitle'>Who am I ?</h2>
            <p>My name is Nicu Chiriac. I'm currently a student in the Computer Science field. My passions for web development started as a curiosity towards the fascinating world of the internet.</p>
            <p>I enjoy looking at a well designed website and I know that a good web application can make the difference for a company in the long run.</p>
            <p>As a person, I would say I'm funny, very sociable and I like to work for the things that I'm passionate about.</p>
            <a href={ResumePDF} download='Resume Chiriac Nicu.pdf'>
              <button className='button'>Get my CV</button>
            </a>
          </div>
          <picture>
            <img src={aboutImg} alt="Myself in Greece."></img>
          </picture>
        </div>
      </div>
    </section>
  )
}

export default About
