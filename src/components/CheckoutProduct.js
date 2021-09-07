import React from 'react'

import '../css/CheckoutProduct.css'

class CheckoutProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
    }

    getRatingBackgroundPosition() {
        switch(this.props.rating) {
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

    render() {
        return (
            <div className="checkout-product">
                <div className="checkout-product__left">
                    <img 
                        src={this.props.image} 
                        alt={this.props.title} 
                        className="checkout-product__image" 
                    />
                </div>
                <div className="checkout-product__right">
                    <p className="checkout-product__title right-item">{this.props.title}</p>
                    <p className="checkout-product__price right-item">
                        <small>£</small>
                        <strong>{this.props.price}</strong>
                    </p>
                    <div className="checkout-product__rating-stars right-item" style={{ backgroundPosition: this.getRatingBackgroundPosition()}}></div>
                    <div className="checkout-product__right-bottom-options right-item">
                        <input 
                            type="submit" 
                            value="Delete"
                            className="checkout-product__options-button" 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutProduct
