import React from 'react'

import '../css/EndOfSummerDeals.css'

function EndOfSummerDeals() {
    return (
        <div className="end-of-summer-deals__container grid-card-layout">
            <div className="end-of-summer-deals__header">
                <h1>End of Summer Sale Deals</h1>
            </div>
            <div className="end-of-summer-deals__body">
                <div className="end-of-summer-deals__image-container">
                    <img 
                        src="https://www.amazon.co.uk/images/G/02/SPORTS/LEGO_EOSS_deal_image._AC_SY230_.png" 
                        alt="Shipped from and sold by Amazon.co.uk"
                        className="end-of-summer-deals__image" 
                    />
                </div>
                <div className="end-of-summer-deals__price-container">
                    <small className="pound-sign-top">£</small>
                    <span>13.74</span>
                    <span className="dash">-</span>
                    <small className="pound-sign-top">£</small>
                    <span>82.99</span>
                </div>
                <span className="end-of-summer-deals__category-title">LEGO</span>
            </div>
            <div className="end-of-summer-deals__footer">
                <a href="">Shop all deals</a>
            </div>
        </div>
    )
}

export default EndOfSummerDeals
