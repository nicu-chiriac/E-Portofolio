import React from 'react';
import './SideSocialLinks.css';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import email from '../../assets/mail.svg';



const SideSocialLinks = () => {
  return (
    <div className="sticky-left-container">
      <ul className="sticky-left">
        <li>
          <img width="25" height="25" title="" alt="" src={linkedin} className="social__link" />
          <p>LinkedIn</p>
        </li>
        <li>
          <img width="25" height="25" title="" alt="" src={github} />
          <p>GitHub</p>
        </li>
        <li>
          <img width="25" height="25" title="" alt="" src={email} />
          <p>Email</p>
        </li>
      </ul>
    </div>
  )
}

export default SideSocialLinks
