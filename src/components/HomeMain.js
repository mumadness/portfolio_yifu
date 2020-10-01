import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import GenerateImage from "./GenerateImage"
import HomeProjectList from "./HomeProjectList"
import HomeExperienceList from "./HomeExperienceList"
import montanaSun from '../img/montana-sun.jpg'
import taorminaEtna from "../img/taormina-etna.jpg"
import americanIdiot from "../img/american-idiot.jpg"
import varsityBball from "../img/varsity-bball.jpg"
import cambodia from "../img/cambodia.jpg"
import capitolGs from "../img/capitol-gs.jpg"

export default function HomeMain() {

    const homeImages = [
        {
            img: montanaSun,
            description: "This picture was taken in beautiful Bozeman, Montana. I had the chance to live with my best friend there for the summer. If you like the outdoors, fresh air, and seeing animals everyday, come give Montana a look!"
        },
        {
            img: taorminaEtna,
            description: "I lived in Italy for a year. In the photo, I am in the town of Taormina in Northeastern Sicily, and in the background is Mount Etna, an active volcano"
        },
        {
            img: americanIdiot,
            description: "I was in my high school's installment of the Green Day musical 'American Idiot'. I was a supporting character that sung in the background for most songs but had a couple solos too. I was never a theater person, but this experience was incredibly fun and eye-opening"
        },
        {
            img: varsityBball,
            description: "Shoutout to my high school basketball team. I definitely miss playing competitively"
        },
        {
            img: cambodia,
            description: "I run a volunteering trip to Cambodia every summer. We donate and install simple solar home systems for those who cannot afford electricity"
        },
        {
            img: capitolGs,
            description: "I'm in an a cappella group called The Capitol G's at Georgetown University. We're a chill group that is not bound by any musical genre. This is us after a performance"
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

    function randomNumber(){
        return Math.floor(Math.random() * homeImages.length)
    }


    return (
        <div className="home-main-wrapper split">
            <div className="img-intro split left">
                <GenerateImage images={homeImages} randomNumber={randomNumber}/>
            </div>

            <div className="main-proj split right">
                <h3>Experience</h3>
                <HomeExperienceList />
                <h3>Things I've built</h3>
                <HomeProjectList projects={completedProjects}/>
                <div className="link-wrapper">
                    <a href="/projects" className="link">More on projects &gt;&gt;</a>
                </div>
            </div>
        </div>
    )
}


