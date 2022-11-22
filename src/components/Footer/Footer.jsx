import React from 'react';
import './Footer.css';
import { BsWhatsapp } from 'react-icons/bs';
import { BsMessenger } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <section className='footer' id="footer">
      <div className="container">
        <div className="row">
          <div className="box">
            <div className="box__row_1">
              <BsWhatsapp className='footer__icon' />
              <h2>WhatsApp</h2>
            </div>
            <div className="box__row_2">
              <h4>0768 029 807</h4>
              <a href="#unavailable">
                <button>Contact me</button>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="box__row_1">
              <FiMail className='footer__icon' />
              <h2>Mail</h2>
            </div>
            <div className="box__row_2">
              <h4>nicu.chiriac99@yahoo.com</h4>
              <a href="#unavailable">
                <button>Contact me</button>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="box__row_1">
              <BsMessenger className='footer__icon' />
              <h2>Messenger</h2>
            </div>
            <div className="box__row_2">
              <h4>Chiriac Nicu-Manuel</h4>
              <a href="#unavailable">
                <button>Contact me</button>
              </a>
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
