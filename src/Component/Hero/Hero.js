import React, { useEffect } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { GrLinkBottom } from "react-icons/gr";
import myresume from '../../assets/resume.pdf'
const Hero =  () => {
    useEffect(()=>{
        Aos.init();
    })
    // const handleOpenPDF = () => {
    //     window.open(myresume.pdf, '_blank');
    //   };
return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" className='hero-img ' data-aos="flip-left" />
        <h1 data-aos="zoom-in">I'm <span>Thilagavathi Chandrasear,</span> Web developer </h1>
        <div className="hero-action container">
            <div className="hero-connect" data-aos="fade-right"  data-aos-easing="linear" data-aos-duration="1000"><a href='#contact'  className='home-anchor'>Connect With Me</a></div>
            <a href={myresume} download="Resume" > 
            <div className="hero-resume" data-aos="fade-left"  data-aos-easing="linear" data-aos-duration="1000">My resume<GrLinkBottom /></div>
            </a>
        </div>

    </div>
)
}
export default Hero;