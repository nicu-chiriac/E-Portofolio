import React from 'react';
import profile from './../../assets/profile.png';
import './Hero.css';
import SideSocialLinks from '../SideSocialLinks/SideSocialLinks';

const Hero = () => {
  return (
    <section className='hero' id="home">
      <div className="container">
        <div className="row">
          <picture>
            <div className="blob">
              <svg viewBox="0 0 800 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                <g transform="translate(155.27984428405762, 12.95567512512207)">
                  <path fill="#352d42">
                    <animate
                      className='blob'
                      attributeName='d'
                      dur='10000ms'
                      repeatCount='indefinite'
                      values='M471,301Q445,352,418,403Q391,454,334.5,468Q278,482,223,473.5Q168,465,132,425.5Q96,386,71.5,343Q47,300,38,248Q29,196,52.5,146Q76,96,122,65.5Q168,35,224,19Q280,3,326,38.5Q372,74,406,112Q440,150,468.5,200Q497,250,471,301Z;
                              M477,306.5Q466,363,419,395Q372,427,324,444Q276,461,224.5,457Q173,453,119.5,433Q66,413,52.5,357.5Q39,302,44,251Q49,200,61,146.5Q73,93,118,57Q163,21,219,33.5Q275,46,328.5,52.5Q382,59,413,103.5Q444,148,466,199Q488,250,477,306.5Z;
                              M449,298Q433,346,392,371Q351,396,312.5,421.5Q274,447,222.5,452Q171,457,134,421Q97,385,64,344.5Q31,304,48,254Q65,204,74,153Q83,102,122.5,60Q162,18,217,41.5Q272,65,321,70.5Q370,76,391.5,120Q413,164,439,207Q465,250,449,298Z;
                              M462,299.5Q439,349,410,394.5Q381,440,328,446.5Q275,453,225,450Q175,447,122,428.5Q69,410,50,357Q31,304,29,249.5Q27,195,48.5,142.5Q70,90,121.5,68.5Q173,47,223.5,49Q274,51,330,51.5Q386,52,421,97Q456,142,470.5,196Q485,250,462,299.5Z;
                              M457,302.5Q449,355,412,392.5Q375,430,327.5,464Q280,498,229,469Q178,440,121.5,427Q65,414,57.5,356.5Q50,299,38,247Q26,195,46.5,141.5Q67,88,114.5,53Q162,18,218,33.5Q274,49,323.5,60.5Q373,72,408.5,110Q444,148,454.5,199Q465,250,457,302.5Z;
                              M474,304.5Q458,359,417,395.5Q376,432,326,447Q276,462,227,451.5Q178,441,123.5,426Q69,411,40.5,360Q12,309,11.5,250Q11,191,49.5,148.5Q88,106,135,89Q182,72,230,44.5Q278,17,329.5,38.5Q381,60,399.5,111Q418,162,454,206Q490,250,474,304.5Z;
                              M471,301Q445,352,418,403Q391,454,334.5,468Q278,482,223,473.5Q168,465,132,425.5Q96,386,71.5,343Q47,300,38,248Q29,196,52.5,146Q76,96,122,65.5Q168,35,224,19Q280,3,326,38.5Q372,74,406,112Q440,150,468.5,200Q497,250,471,301Z'
                    >
                    </animate>
                  </path>
                </g>
              </svg>
            </div>
            <img src={profile} className='profile__img' alt="Me"></img>
          </picture>
          <div className="column">
            <h1 className='section__title'>
              <span>I'm Nicu.  <br /> Student and Web Developer.</span>
            </h1>
            <h1 className='section__subtitle'>
              <span>This is my digital portofolio.</span>
              <span>A more interactive way to present myself than a classic CV.</span>
            </h1>
            <SideSocialLinks />
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
