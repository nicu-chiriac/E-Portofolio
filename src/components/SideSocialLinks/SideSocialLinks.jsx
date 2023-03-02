import React from 'react';
import './SideSocialLinks.css';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import email from '../../assets/mail.svg';


const SideSocialLinks = () => {
  return (
    <div className="sticky-left-container">
      <ul className="sticky-left">
        <li onClick={() => window.open('https://www.linkedin.com/in/nicu-chiriac99/', '_blank')}>
          <img width="25" height="25" title="" alt="" src={linkedin} />
          <p>LinkedIn</p>
        </li>
        <li onClick={() => window.open('https://github.com/nicu-chiriac', '_blank')}>
          <img width="25" height="25" title="" alt="" src={github} />
          <p>GitHub</p>
        </li>
        <li onClick={() => window.open('mailto:nicu.chiriac99@yahoo.com', '_blank')}>
          <img width="25" height="25" title="" alt="" src={email} />
          <p>Email</p>
        </li>
      </ul>
    </div>
  )
}

export default SideSocialLinks
