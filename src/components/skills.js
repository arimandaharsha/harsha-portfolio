import React from "react";
import '../App.css';
import SkillsCard from "./skills-card";
import { motion } from "framer-motion";


function Skills(){

    
    
    return(
        <motion.div  className="skills">
            <h2 className="grad-text" style={{fontSize: "60px", fontWeight: "800", marginLeft: "10%"}}>My Skills</h2>
            <motion.div className="skills-content" animate={{ x: ['0%', '-100%', '0%'] }} transition={{ ease: "easeOut", duration: 15, repeat: Infinity }}><SkillsCard /> </motion.div>
            
            
            
        </motion.div>
    );
}

export default Skills;