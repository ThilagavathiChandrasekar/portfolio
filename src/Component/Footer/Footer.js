import React , { useEffect } from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaLinkedin } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init();
})
  return (
    <div id='footer' className='footer container'  >
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={logo} alt='' className='footer-logo' />
                <hr className='hr' />
            </div>
            <div className='footer-bottom'>
              <div className='footer-bottom-left'>
                  <div className='footer-detail d-flex'>
                    <AiOutlineMail className='footer-icons' /><p>cthilagavathi2003@gmail.com</p>     
                  </div>
                  <div className='footer-detail d-flex'>
                    <FaLinkedin className='footer-icons' /><p><a href='https://www.linkedin.com/in/thilagavathi-chandrasekar/'>Thilagavathi Chandrasekar</a></p>     
                  </div> 
                  <div className='footer-detail d-flex '>
                    <FaGithub className='footer-icons' /><p><a href='https://github.com/ThilagavathiChandrasekar/'>Thilagavathi Chandrasekar</a></p>     
                  </div>
              </div>
            <div className='footer-bottom-right'>
              <FaRegCopyright />  Designed and developed by Thilagavathi Chandrasekar 2024
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer