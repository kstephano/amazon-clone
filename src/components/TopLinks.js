import React from 'react'

import '../css/TopLinks.css'

function TopLinks() {
    return (
        <div className="top-links__container grid-card-layout">
            <div className="top-links__header">
                <div className="top-links__header-profile-image-container">
                    <img 
                        src="https://www.amazon.co.uk/avatar/default?customer_id=amzn1.account.AGD5656XK7FHIP5K3VGZI25ZMTRQ&max_width=60&max_height=60&square=true" 
                        alt="profile"
                    />
                </div>    
                <div className="top-links__header-text-container">
                    <h1>Hi, Guest</h1>
                    <p>Customer since 2010</p>
                </div>
            </div>    
            <p className="top-links__subtitle">Top links for you</p>
            <div className="top-links__grid">
                <div className="top-links__grid-item">
                    <div className="top-links__grid-item-image-container">
                        <img 
                            className="top-links__grid-item-image"
                            src="https://m.media-amazon.com/images/G/02/Gateway/orders_profile_card_graphics_uk._AC_SR120,80_.png" 
                            alt="top categories recommendations" 
                        />
                    </div>
                    <a href="" className="top-links__link-overlay"></a>
                    <p className="top-links__grid-item-label">Your Orders</p>
                </div> 
                <div className="top-links__grid-item">
                    <div className="top-links__grid-item-image-container">
                        <img 
                            className="top-links__grid-item-image"
                            src="https://m.media-amazon.com/images/G/02/HUD/Dashboard/ProfileCard/Electronics_Photo_EchoDot._AC_SR120,80_.jpg" 
                            alt="top categories recommendations" 
                        />
                    </div>
                    <a href="" className="top-links__link-overlay"></a>
                    <p className="top-links__grid-item-label">Electronics</p>
                </div>    
                <div className="top-links__grid-item">
                    <div className="top-links__grid-item-image-container">
                        <img 
                            className="top-links__grid-item-image"
                            src="https://m.media-amazon.com/images/G/01/img18/events/holiday/gifthub/staticprofilequadcard_gifting._AC_SR120,80_.png" 
                            alt="top categories recommendations" 
                        />
                    </div>
                    <a href="" className="top-links__link-overlay"></a>
                    <p className="top-links__grid-item-label">Gifts</p>
                </div>    
                <div className="top-links__grid-item">
                    <div className="top-links__grid-item-image-container">
                        <img 
                            className="top-links__grid-item-image"
                            src="https://m.media-amazon.com/images/G/01/img18/events/holiday/gifthub/staticprofilequadcard_dress._AC_SR120,80_.png" 
                            alt="top categories recommendations" 
                        />
                    </div>
                    <a href="" className="top-links__link-overlay"></a>
                    <p className="top-links__grid-item-label">Fashion</p>
                </div>       
            </div>        
        </div>
    )
}

export default TopLinks
