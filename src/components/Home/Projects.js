import React from 'react';

const Projects = ({projects}) => (
    <div className="project-wrapper">
        <p className="project-title">Your projects</p>
        {
            projects.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.project}</p>
                    </div>
                )
            })
        }
    </div>
);

export default Projects;