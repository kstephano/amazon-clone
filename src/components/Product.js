import React from 'react'

import '../css/Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product__image-container">
                <img 
                    className="product__img"
                    src="https://m.media-amazon.com/images/I/61sSAuEPVPL._AC_SL1000_.jpg" 
                    alt="Product" 
                />
            </div>
            <div className="product__title-container ellipsis">
                <span>JVC Fire TV 40" Smart Full HD LEDaaAAAaa</span>
            </div>
            <div className="flex-container-column">
                <div className="flex-container-row">
                    <div className="product__details-container flex-container-column">
                        <div className="product__ratings-container flex-container-row">
                            <div className="product__ratings-stars-45"></div>
                            <span className="product__ratings-count">1903</span>
                        </div>
                        <div className="product__price-container flex-container-row">
                            <span className="product__price">£189.65</span>
                            <img className="product__price-prime-logo" src="https://images-eu.ssl-images-amazon.com/images/G/02/da/creatives/prime-2x-20170531.png" alt="Prime logo" />
                        </div>
                    </div>
                <span className="product__shop-now-btn">Shop now</span>
                </div>
            </div>
        </div>
    )
}

export default Product
