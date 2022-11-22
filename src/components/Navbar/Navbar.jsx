import React from 'react';
import './Navbar.css';
import { BsFileEarmarkPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { HiAcademicCap } from 'react-icons/hi';
import { TbPuzzle2 } from 'react-icons/tb';
import { IoCodeSlashSharp } from 'react-icons/io5';
import { RiContactsLine } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from './../../assets/logo.svg';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }


  return (
    <header className='header'>
      <nav className='nav container'>
        <Link smooth to='/#home' className="nav__logo" scroll={scrollWithOffset}>
          <img src={logo} className='logo' alt="Logo"></img>
        </Link>
        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">

              <Link smooth to='/#home' className="nav__link active-link" scroll={scrollWithOffset}>
                <i className='nav__icon'><AiFillHome size={20} color='white' /></i><span>Home</span>
              </Link>

            </li>

            <li className="nav__item">
              <Link smooth to='/#about' className="nav__link" scroll={scrollWithOffset}>
                <i className='nav__icon'><BsFileEarmarkPersonFill size={20} color='white' /></i><span>About</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link smooth to='/#education' className="nav__link" scroll={scrollWithOffset}>
                <i className='nav__icon'><HiAcademicCap size={20} color='white' /></i><span>Education</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link smooth to='/#skills' className="nav__link" scroll={scrollWithOffset}>
                <i className='nav__icon'><TbPuzzle2 size={20} color='white' /></i><span>Tech skills</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link smooth to='/#projects' className="nav__link" scroll={scrollWithOffset}>
                <i className='nav__icon'><IoCodeSlashSharp size={20} color='white' /></i><span>Projects</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link smooth to='/#footer' className="nav__link" scroll={scrollWithOffset}>
                <i className='nav__icon'><RiContactsLine size={20} color='white' /></i><span>Contacts</span>
              </Link>
            </li>
          </ul>
          <i className='nav__close' onClick={() => setShowMenu(!showMenu)}><FaTimes size={20} color='white' /></i>
        </div>
        <div className="nav__toogle" onClick={() => setShowMenu(!showMenu)}>
          <i><GiHamburgerMenu size={20} color='white' /></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
