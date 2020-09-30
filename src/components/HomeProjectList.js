import React from 'react'
import ProjectMain from './ProjectMain'


export default function HomeProjectList({ projects }) {
    return (
        <>
            <div className="project-list">
            {
                projects.map(project => {
                    return (
                        <ProjectMain
                            key={project.id}
                            name={project.name}
                            stack={project.stack}
                            description={project.description}
                        />
                    )
                })
            }
            </div>
        
        </>
    )
}
