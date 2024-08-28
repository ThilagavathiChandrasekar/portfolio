import React, { useEffect } from 'react'
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import { CiLinkedin } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
  const [result, setResult] = React.useState("Submit now");
  useEffect(()=>{
    Aos.init();
})
  const sumbitMessage = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fef7238e-35ed-410f-a65c-edcedcaebf23");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div id='contact' className='contact  '>
      <div className='contact-title'  data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="500">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='contact-section container'>
        <div className='contact-left'  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me  a message about anything that you want to me work on. You can contact anytime.  </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <AiOutlineMail className='contact-icon' /><p>cthilagavathi2003@gmail.com</p>     
            </div>
            <div className='contact-detail'>
              <IoLocationOutline className='contact-icon' /><p>Velachery, Tamilnadu</p>                  
            </div>
            <div className='contact-detail'>
              <CiLinkedin className='contact-icon' /><p>Thilagavathi Chandrasekar</p>
            </div>
          </div>
        </div>
        <div className='contact-right container'>
          <form onSubmit={sumbitMessage} id='form' className=' col-lg-4 col-sm-12 form'>
            <label>Your Name</label>
            <input type='text' placeholder='Enter your name...'  />
            <label>Your Email</label>
            <input type='text' placeholder='Enter your email...'  />
            <label id='label'>Write your message here</label>
            <textarea  placeholder='Enter your message...'></textarea>
            <button className='contact-submit'>{result}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact