import React from "react";
import '../Styles/Projects.css'


function Projects (props){

    

    return(
        <div className="project-all-container">
            <img
                src={require(`../images/project-${props.image}.jpg`)} 
                alt="project image"
                className="img-project"/>
            <div className="project-container">
                <p className="name-project">{props.name}</p>
                <p className="technologies-project">{props.technologies}</p>
                <p className="description-project">{props.description}</p>
                <a href={props.url} target="_blank" className="repo-project">Repository</a>
            </div>
        </div>
    );
}

export default Projects;