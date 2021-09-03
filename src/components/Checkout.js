import React from 'react'

import '../css/Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__grid">
                <div className="checkout__advert checkout__grid-item checkout__grid-item-one">
                    <img 
                        src="https://images-na.ssl-images-amazon.com/images/G/02/creadability/LOGO-91x22._CB644385803_.png" 
                        alt="" 
                        className="checkout__advert-image" 
                    />
                    <div className="checkout__advert-right">
                        <span style={{color: "#6425F5"}}><strong style={{fontSize: "18px"}}>See your score, smash your goals and save money.</strong></span><br></br>
                        <span style={{fontSize: "16px"}}>It starts with your free credit score. Learn more</span>
                    </div>
                </div>
                <div className="checkout__right checkout__grid-item checkout__grid-item-two">
                    <div className="checkout__right-subtotal">
                        <h2>Subtotal goes here</h2>
                        <Subtotal basket={0}/>
                    </div>
                </div>
                <div className="checkout__left checkout__grid-item checkout__grid-item-three">
                    <div className="checkout__left-header">
                        <h1 className="checkout__left-header-title">Shopping Basket</h1>
                    </div>
                    <div className="checkout__left-body">

                    </div>
                    <div className="checkout__left-footer">
                        <span>Subtotal (1 item): <strong>£998.63</strong></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Checkout
