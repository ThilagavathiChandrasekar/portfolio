import React, { useState, useRef } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
    menuRef.current.classList.remove('hide');
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
    setTimeout(() => {
      menuRef.current.classList.add('hide');
      setIsMenuOpen(false);
    }, 500); 
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'menu-opened' : ''}`}>
      <img src={logo} alt='' className='nav-logo' />
      <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />
      <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
      <ul ref={menuRef} onClick={closeMenu} className='nav-menu hide'>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => { setMenu("home") }}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => { setMenu("about") }}>About</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#skills'>
            <p onClick={() => { setMenu("skills") }}>Skills</p>
          </AnchorLink>
          {menu === "skills" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <p onClick={() => { setMenu("projects") }}>Projects</p>
          </AnchorLink>
          {menu === "projects" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => { setMenu("contact") }}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>
       <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          <p onClick={() => { setMenu("contact") }}>Connect With Me</p>
        </AnchorLink>
      </div> 
      
    </div>
  );
};

export default Navbar;
