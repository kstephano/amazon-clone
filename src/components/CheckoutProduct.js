import React, { useState } from 'react'

import '../css/CheckoutProduct.css'
import { useStateValue } from '../redux/StateProvider';

function CheckoutProduct({ id, title, image, price, rating}) {
    const [quantity, setQuantity] = useState(1);
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

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
        <div className="checkout-product">
            <div className="checkout-product__left">
                <img 
                    src={image} 
                    alt={title} 
                    className="checkout-product__image" 
                />
            </div>
            <div className="checkout-product__right">
                <p className="checkout-product__title right-item">{title}</p>
                <p className="checkout-product__price right-item">
                    <small>£</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product__rating-stars right-item" style={{ backgroundPosition: getRatingBackgroundPosition()}}></div>
                <div className="checkout-product__right-bottom-options right-item">
                    <button className="checkout-product__options-button" onClick={removeFromBasket}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
