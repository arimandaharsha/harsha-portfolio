import React from "react";

function ProjectCard(props){
    return(
       <div className="pr-card">
            <div  style={{flex: "1"}}>
                <h3 className="pr-card-img">{props.logo}</h3>
            </div>
            <div style={{flex: "2"}}>
                <p>{props.langs}</p>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>

            </div>

       </div>
    );
}

export default ProjectCard;