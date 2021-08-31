import React from 'react'
import InfoIcon from '@material-ui/icons/Info';

import '../css/Advert.css'

function Advert() {
    return (
        <div className="advert">
            <div className="advert__image-container">
                <img 
                    src="https://m.media-amazon.com/images/I/511d3Tfh3ML.jpg" 
                    alt="Advert" 
                    className="advert__image" 
                />
                <div className="advert__info-container">
                    <span>Sponsored</span>
                    <InfoIcon className="advert__info-logo" />
                </div>
            </div>  
        </div>
    )
}

export default Advert
