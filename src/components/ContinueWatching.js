import React from 'react'

import '../css/ContinueWatching.css'

function ContinueWatching({ title, image}) {
    return (
        <div className="continue-watching grid-card-layout">  
            <div className="continue-watching__header">
                <h1>Continue watching</h1>
            </div>
            <div className="continue-watching__body">
                <div className="continue-watching__image-container">
                    <img src={image} alt={title} className="continue-watching__image" />
                    <img src="https://www.amazon.co.uk/images/G/01/gateway/hud/aui-play-button-1x._CB1524273012_.png" alt="Play icon" className="continue-watching__play-icon" />
                </div>
                <p>{title}</p>
            </div>
            <div className="continue-watching__footer">
                <a href="">See more from Prime Video</a>
            </div>
        </div>
    )
}

export default ContinueWatching
