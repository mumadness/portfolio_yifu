import React from 'react'

export default function ExperienceMain(props) {
    const {
        title,
        company
    } = props

    return (
        <div className="experience-wrapper header">
            <div className="experience__title">
                {title}
            </div>

            <div className="experience__company">
                {company}
            </div>
            
        </div>
    )
}
