import React from 'react'

import '../css/ContinueWatching.css'

function ContinueWatching({ title, image}) {
    return (
        <div className="continue-watching">  
            <div className="continue-watching__header">
                <h1>Continue watching</h1>
            </div>
            <div className="continue-watching__body">
                <img src={image} alt={title} className="continue-watching__image" />
                <p>{title}</p>
            </div>
            <div className="continue-watching__footer">
                <a href="">See more from Prime Video</a>
            </div>
        </div>
    )
}

export default ContinueWatching
