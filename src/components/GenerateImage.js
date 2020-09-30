import React, { useState } from 'react'

export default function GenerateImage({ images, randomNumber }) {
    const [image, setImage] = useState(images[0].img)
    const [imgDescription, setImgDescription] = useState(images[0].description)

    function pickRandomImage() {
        const random = randomNumber()
        setImage(images[random].img)
        setImgDescription(images[random].description)
    }


    return (
        <div className="main-img">
            <div className="home-img-wrapper">
                <a href="/about">
                    <img src={image} alt="home img" className="home-page-img" />
                </a>
            </div>
            
            <div className="right-side-of-img">
                <p className="img-description">
                    {imgDescription}
                </p>
                <p className="fixed-message">
                    If you want to know more about me, click on the picture! Want to see another? Hit Refresh
                </p>

                <button className="btn" onClick={pickRandomImage}>Refresh</button>
            </div> 
        </div>
    )
}
