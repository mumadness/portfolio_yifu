import React from 'react'
import HomeProjectList from './HomeProjectList'
import NavBar from "./NavBar"
import Footer from "./Footer"
import { v4 as uuidv4 } from 'uuid'

export default function Projects() {

    const currentProjects = 
    [
        {
            id: uuidv4(),
            name: "Rap Lyrics Generator",
            stack: "Python",
            description: "A lyrics generator that uses Markov Models. This project takes into consideration different rhyme schemes and stylistic choices from different artists. A training corpus is needed in order to reach more reasonable results"
        },

        {
            id: uuidv4(),
            name: "Light Up Tonle Sap Website",
            stack: "HTML, CSS, React",
            description: "Currently working on a website for the volunteering trip I lead to Cambodia every summer We donate and install simple solar home systems for those who do not have access to electricity. More to come soon!"
        }
    ]

    const completedProjects = 
    [
        {
            id: uuidv4(),
            name: "Dope Books Society",
            stack: "Node.js, Express, MongoDB",
            description: "Inspired by book-loving friends, I built an app that helped manage the books we've read. I connected to the Goodreads API and added CRUD functionalities. There is also a real-time chat component built with socket.io, which helps us share our ideas whenever and wherever"
        },

        {
            id: uuidv4(),
            name: "Personal Website",
            stack: "React",
            description: "This website is powered by React. It's a simple yet compact site that features interactive qualities"
        },

        {
            id: uuidv4(),
            name: "CL Lisp Interpreter",
            stack: "C",
            description: "I wrote a very simple command line shell for the Lisp language. The program reads in user input from the stream, generates parse trees, and stores essential information -- function definition, variable assignment, function operations"
        }
    ]

    return (
        <>
            <NavBar />
            <div className="projects-wrapper">
                
                <h3>Things I've built</h3>
                <div className="projects__completed">
                    <HomeProjectList projects={completedProjects}/>
                </div>

                <h3>Things I'm working on right now</h3>
                <div className="projects__completed">
                    <HomeProjectList projects={currentProjects}/>
                </div>

                
            </div>
            <Footer />
        </>
    )
}
