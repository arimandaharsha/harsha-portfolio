import React from "react";
import ProjectCard from "./project-card";
import '../App.css';

const projects = [
    {
        logo: "Web 3.0",
        title: "D Bank",
        langs: "Motoko",
        desc: "D Bank is a Web 3.0 based project where a user can deposit funds into this decentralized bank and earn compound interest."
    },
    {
        logo: "REC",
        title: "Screen Recorder",
        langs: "Python",
        desc: "This is a desktop application, developed using python. This application records the screen of the user."
    },
    {
        logo: "Note",
        title: "Take Note",
        langs: "React",
        desc: "Take Note is a simple web app designed for note taking and organizing tasks. It is developed using React."
    }
]

const pCard =  projects.map((project) => {
    return(
        
    <div className="projects-display">
        <ProjectCard logo={project.logo} title={project.title} desc={project.desc} langs={project.langs} />
    </div>
    
    
    );        
})

function Projects(){
    return(
        <div className="projects">
        <h2 className="grad-text" style={{fontSize: "60px", fontWeight: "800"}}>My Projects</h2>
        {pCard}
        </div>
        
        
    );
}

export default Projects;