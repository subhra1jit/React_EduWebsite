import React from 'react';
import {NavLink} from "react-router-dom"
import web from "../images/teacher.svg";
import Common from "../React_component/Common";


const Home = () => {
  return (
    <>
    <Common mainline="Welcome to our society"
    comline="Tutorial4All"
    sideline="start your carrier here"
    travel="/services"
    btnline="Get Started"
    web={web}/>

    </>
  )
}

export default Home