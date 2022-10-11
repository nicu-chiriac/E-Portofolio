import React from 'react';
import './Navbar.css';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { HiAcademicCap } from 'react-icons/hi';
import { GrTechnology } from 'react-icons/gr';
import { IoCodeSlashSharp } from 'react-icons/io5';
import { GrContactInfo } from 'react-icons/gr';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from './../../assets/logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="index.html" className="nav__logo">
          <img src={logo} className='logo' alt="Logo"></img>
        </a>
        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#hero" className="nav__link active-link">
                <i className='nav__icon'><AiFillHome size={20} color='black' /></i><span>Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className='nav__icon'><BsFileEarmarkPersonFill size={20} color='black' /></i><span>About</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#education" className="nav__link">
                <i className='nav__icon'><HiAcademicCap size={20} color='black' /></i><span>Education</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className='nav__icon'><GrTechnology size={20} color='black' /></i><span>Tech skills</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className='nav__icon'><IoCodeSlashSharp size={20} color='black' /></i><span>Projects</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#footer" className="nav__link">
                <i className='nav__icon'><GrContactInfo size={20} color='black' /></i><span>Contact</span>
              </a>
            </li>
          </ul>
          <i className='nav__close' onClick={() => setShowMenu(!showMenu)}><FaTimes size={20} color='black' /></i>
        </div>
        <div className="nav__toogle" onClick={() => setShowMenu(!showMenu)}>
          <i><GiHamburgerMenu size={20} color='black' /></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
