import React, { useEffect } from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaRegHandPointLeft } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { Card } from "react-bootstrap";
const MyWork= () => {
    useEffect(()=>{
        Aos.init();
    })
return (
    <div id='projects' className='mywork'>
        <div className="mywork-title"  data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="500">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
            <div className='cards'>
                {mywork_data.map((work)=>{
                    return <>
                    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Card className="body-card video-card">
                                <img src={work.w_img} alt='project' className='project-img'/> 
                                <Card.Title className="video-dec">
                                    <h3>{work.w_title}</h3>
                                    <hr />
                                    <p className='card-desc'>{work.w_desc}</p>
                                    <div className='link_button'>
                                        <a href={work.w_link1}  target='_blank' rel="noopener noreferrer"><button> Repo Link <FaRegHandPointLeft className='hand-icon' /></button></a>
                                        <a href={work.w_link2}  target='_blank' rel="noopener noreferrer"><button> Live Link <HiLink className='hand-icon' /></button></a>
                                    </div>
                                </Card.Title>
                            </Card> 
                        </div>
                        </>
                })}
            </div>      
    </div>
)
}
export default MyWork;