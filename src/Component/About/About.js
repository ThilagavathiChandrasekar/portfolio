import React, { useEffect } from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=>{
        Aos.init();
    })
return(
    <div id='about' className='about container'>
        <div className="about-title"  data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="500">
        <h1 >About me</h1>
        <img src={theme_pattern} alt=""  />
        </div> 
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt='' data-aos="zoom-out" data-aos-duration="500"  data-aos-easing="linear"  />
            </div>
            <div className='about-right'>
                <div className='about-para' data-aos="zoom-in" data-aos-duration="500" data-aos-easing="linear" > 
                    <p>I recently graduate with a degree BE-Computer Science and Engineering In Bharath Niketan Engineering college Theni. I got a second price in academic. </p>
                    <p>I had studied <a className='certificate' href="https://udemy-htmlcss-certificate.netlify.app/"  target='_blank' rel="noopener noreferrer">HTML, CSS</a>,<a className='certificate' href="https://udemy-javascript-certficate.netlify.app/" target='_blank' rel="noopener noreferrer">JS</a>  in UDEMY. I have <a className='certificate' href="https://thilagavathichandrasekar.github.io/hyse-internship/" target='_blank' rel="noopener noreferrer">HYSE Software Solution</a> and <a className='certificate' href="https://scenchola-certificate.netlify.app/" target='_blank' rel="noopener noreferrer">Shensola University</a>  web development Internship experiences</p>
                </div>
            </div>
        </div>
    </div>
)}
export default About;
