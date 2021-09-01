import React from 'react'

import '../css/RecommendedVideo.css'

function RecommendedVideo() {
    return (
        <div className="recommended-video__container grid-card-layout">
            <div className="recommended-video__header">
                <h1>Video: Recommended for you</h1>
                <p>War Dogs</p>
            </div>
            <div className="recommended-video__body">
                <div className="recommended-video__background-blur"></div>
                <div className="recommended-video__image-container">
                    <div className="recommended-video__image"></div>
                </div>
            </div>
            <div className="recommended-video__footer">
                <p>Start watching on Prime Video</p>
            </div>
        </div>
    )
}

export default RecommendedVideo
