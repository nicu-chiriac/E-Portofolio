import React from 'react';
import './Footer.css';
import { BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <section className='footer' id="footer">
      <div className="container">
        <div className="row">
          <div className="box">
            <div className="box__row_1">
              <BsWhatsapp className='footer__icon' />
              <h2>Phone Number</h2>
            </div>
            <div className="box__row_2">
              <h4>0768 029 807</h4>
            </div>
          </div>
          <div className="box">
            <div className="box__row_1">
              <FiMail className='footer__icon' />
              <h2>Mail</h2>
            </div>
            <div className="box__row_2">
              <h4>nicu.chiriac99@yahoo.com</h4>
              <div onClick={() => window.open('mailto:nicu.chiriac99@yahoo.com', '_blank')}>
                <button>Contact me</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__rights">
          <h3>® Chiriac Nicu. 2022</h3>
        </div>
      </div>
    </section>
  )
}

export default Footer
