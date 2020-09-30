import React from 'react'
import ExperienceMain from "./ExperienceMain"
import { v4 as uuidv4 } from 'uuid'

export default function HomeExperienceList() {
    const experiences = 
    [
        {
            id: uuidv4(),
            title: "Tech Intern",
            company: "Pipifit (Beijing)"
        },

        {
            id: uuidv4(),
            title: "Teaching Assistant (C++)",
            company: "Georgetown University"
        }
    ]

    return (
        <div>
        {
            experiences.map(exp => {
                return (
                    <ExperienceMain
                        key={exp.id}
                        title={exp.title}
                        company={exp.company} 
                    />
                )
        })}
        </div>
    )
}
