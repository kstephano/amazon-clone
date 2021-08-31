import React from 'react'

import '../css/Product.css'

function Product({ title, image, price, rating, ratingCount }) {

    function getRatingBackgroundPosition() {
        switch(rating) {
            case 0:
                return "-278px -100px"
            case 0.5:
                return "-278px -120px";
            case 1:
                return "-375px -144px";
            case 1.5:
                return "-390px -164px";
            case 2: 
                return "-181px -76px";
            case 2.5:
                return "-99px -68px";
            case 3:
                return "-84px -48px";
            case 3.5:
                return "-181px -56px";
            case 4:
                return "-84px -8px";
            case 4.5:
                return "-84px -28px";
            case 5:
                return "-166px -36px";
            default:
                return "-278px -100px"
        }
    }
    return (
        <div className="product">
            <div className="product__image-container">
                <img 
                    className="product__img"
                    src={image}
                    alt="Product" 
                />
            </div>
            <div className="product__title-container ellipsis">
                <span>{title}</span>
            </div>
            <div className="flex-container-column">
                <div className="flex-container-row">
                    <div className="product__details-container flex-container-column">
                        <div className="product__ratings-container flex-container-row">
                            <div className="product__ratings-stars-45" style={{ backgroundPosition: getRatingBackgroundPosition()}}></div>
                            <span className="product__ratings-count">{ratingCount}</span>
                        </div>
                        <div className="flex-container-row">
                            <div className="product__price-container">
                                <span>£</span><span className="product__price">{price}</span>
                            </div>
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
