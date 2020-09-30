import React from 'react'
import NavBar from './NavBar'
import tuftSteps from '../img/tufts-steps.jpg'

export default function About() {
    return (
        <>
            <NavBar />
            <div className="about-content">
                <div className="about-img-wrapper">
                    <img src={tuftSteps} alt="Tufts steps" className="about-img"/>
                </div>

                <div className="about-intro">
                    <p className="about-intro-p">
                        Hi! Welcome to my website!
                    </p>
                    <p className="about-intro-p">
                        My name is Yifu Mu, and I'm an aspiring software engineer. 
                    </p>
                    <p className="about-intro-p">
                        I study computer science and linguistics at Georgetown University
                    </p>
                    <p className="about-intro-p">
                        My passions include: learning languages, playing basketball, traveling, cooking, singing
                    </p>
                    <p className="about-intro-p">
                        Please check out my personal projects! And feel free to reach me via email at ym431@georgetown.edu !
                    </p>
                    <p className="about-intro-p">
                        Come talk to me about anything -- from CS to linguistics to a cappella to cooking Asian food
                    </p>
                </div>

                
            </div>
        </>
        
    )
}
