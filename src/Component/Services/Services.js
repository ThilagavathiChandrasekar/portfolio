import React , { useEffect }from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'


const Services = () => {
  useEffect(()=>{
    Aos.init();
})
  return (
    <div id='skills' className='services'>
        <div className='services-title'  data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="500">
            <h1>My Skills</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className='servies-container'>
            <div className='services-skill'>
                <div className='services-format' data-aos="flip-right" data-aos-easing="linear"  data-aos-duration="1000">
                <IoLogoHtml5 className='html ' />
                </div>
                <div className='services-format' data-aos="flip-right" data-aos-easing="linear"  data-aos-duration="1000">
                <FaCss3Alt className='css ' />
                </div>
                <div className='services-format' data-aos="flip-right" data-aos-easing="linear"  data-aos-duration="1000">
                <SiJavascript className='js ' />
                </div>
                <div className='services-format' data-aos="flip-right" data-aos-easing="linear"  data-aos-duration="1000">
                <FaReact className='react ' />
                </div>
                <div className='services-format' data-aos="flip-right" data-aos-easing="linear"  data-aos-duration="1000" >
                <FaBootstrap className='bs ' />
                </div>
                <div className='services-format' data-aos="flip-right" data-aos-easing="linear"  data-aos-duration="1000">
                <BsFiletypeSql className='sql ' />
                </div>
                <div className='services-format' data-aos="flip-right" data-aos-easing="linear"  data-aos-duration="1000">
                <FaJava className='java ' />
                </div>
                <div className='services-format' data-aos="flip-right" data-aos-easing="linear"  data-aos-duration="1000">
                <FaGitAlt className='git ' />
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Services