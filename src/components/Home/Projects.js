import React from 'react';

const Projects = ({projects}) => (
    <div className="project-wrapper">
        <p className="project-title">Your projects</p>
        {
            projects.map((item) => {
                return (
                    <div key={item.id}>
                        <p className="name">{item.project}</p>
                        <p className="project-info"><span className="company">{item.company}</span><span>{item.price}</span></p>
                    </div>
                )
            })
        }
    </div>
);

export default Projects;