 import React from 'react';
 import '../App.css';
 import { FaPython, FaJava, FaJsSquare,  FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
 import { DiMongodb } from "react-icons/di";
 import { TbApi } from "react-icons/tb";


 function SkillsCard(){
    return(
        <>
            
            <div className='skill-card'><FaPython size={"3em"} /></div>
            <div className='skill-card'><FaJava size={"3em"} /></div>
            <div className='skill-card'><FaHtml5 size={"3em"} /></div>            
            <div className='skill-card'><FaCss3Alt size={"3em"} /></div>
            <div className='skill-card'><FaJsSquare size={"3em"} /></div>
            <div className='skill-card'><FaNodeJs size={"3em"} /></div>
            <div className='skill-card'><FaReact size={"3em"} /></div>
            <div className='skill-card'><DiMongodb size={"3em"} /></div>
            <div className='skill-card'><TbApi size={"3em"} /></div>
            
            
        </>
    );
 }

 export default SkillsCard;