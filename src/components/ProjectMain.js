import React from 'react'

export default function ProjectMain(props) {
    const {
        name,
        stack,
        description
    } = props

    return (
        <div className="project-wrapper">
            <div className="project__header header">
                <div className="project__name">{name}</div>
                <div className="project__stack">{stack}</div>
            </div>

            <div className="project__description">
                {description}
            </div>
        </div>
    )
}
