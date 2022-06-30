import React from 'react';
import {NavLink} from "react-router-dom"
import web from "../images/study.png";
import Common from "../React_component/Common";

const About = () => {
  return (
    <>
    <Common
    mainline="Hello we welcome you to our"
    comline="About page" 
    sideline="to know more"
    btnline="Start Now"
    travel="/contact"
    web={web}
    />
    
    </>
  )
}

export default About