import React from 'react'

export default function NavBar() {
    return (
        <div className="nav-bar-wrapper">
            <div className="left-logo">
                <a href="/" className="nav-bar-item-link">yifu mu</a>
            </div>

            <div className="nav-bar-options">
                <div className="nav-bar-item">
                    <a href="/about" className="nav-bar-item-link">About</a>
                </div>

                <div className="nav-bar-item">
                    <a href="/projects" className="nav-bar-item-link" >Projects</a>
                </div>
            </div>
            
        </div>
    )
}