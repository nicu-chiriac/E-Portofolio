import React from 'react';
import './Education.css';
import bg_photo_1 from './../../assets/unirea.jpg';
import bg_photo_2 from './../../assets/fiir.jpg';
import bg_photo_3 from './../../assets/acs.jpg';
import logo_1 from './../../assets/SiglaCNU.png';
import logo_2 from './../../assets/fiir-logo.png';
import logo_3 from './../../assets/politehnica.png';
import logo_4 from './../../assets/acs-logo-ro.png';


const Education = () => {
  return (
    <section className='education section timeline container'>
      <div className="tl-item">
        <div className="tl-bg" style={{ backgroundImage: `url(${bg_photo_1})` }}></div>
        <div className='tl-name'>
          <h2>College</h2>
        </div>
        <div className="tl-year">
          <p>2018</p>
        </div>

        <div className="tl-content">
          <h1>"Unirea" National College</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          <div className='logos'>
            <img src={logo_1} alt="Logo"></img>
          </div>
        </div>

      </div>

      <div className="tl-item">

        <div className="tl-bg" style={{ backgroundImage: `url(${bg_photo_2})` }}></div>
        <div className='tl-name'>
          <h2>Bachelor's Degree</h2>
        </div>
        <div className="tl-year">
          <p>2022</p>
        </div>

        <div className="tl-content">
          <h1>Faculty of Industrial Engineering and Robotics</h1>
          <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
          <div className='logos'>
            <img src={logo_3} alt="Logo"></img>
            <img src={logo_2} alt="Logo"></img>
          </div>
        </div>

      </div>

      <div className="tl-item">

        <div className="tl-bg" style={{ backgroundImage: `url(${bg_photo_3})` }}></div>
        <div className='tl-name'>
          <h2>Master's Degree</h2>
        </div>
        <div className="tl-year">
          <p>2022-2024</p>
        </div>

        <div className="tl-content">
          <h1>Faculty of Automatic Control and Computer Science</h1>
          <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
          <div className='logos'>
            <img src={logo_3} alt="Logo"></img>
            <img src={logo_4} alt="Logo"></img>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education
