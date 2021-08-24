import React from 'react'

import '../css/GiftFinder.css'

function GiftFinder() {
    return (
        <div className='gift-finder__container'>
            <div className="gift-finder__header">
                <h1>Looking for a gift?</h1>
            </div>
            <div className="gift-finder__body">
                <p>Find personalised gift ideas and surprise someone you love</p>
            </div>
            <div className="gift-finder__footer">
                <a>Check out the Gift Finder</a>
            </div>
        </div>
    )
}

export default GiftFinder
