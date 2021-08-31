import React from 'react'

import '../css/SummerSale.css'

function SummerSale() {
    return (
        <div className="summersale__container grid-card-layout">
            <div className="summersale__header">
                <h1>End of Summer Sale by category</h1>
            </div>
            <div className="summersale__grid">
                <div className="summersale__grid-item">
                    <img 
                        src="https://www.amazon.co.uk/images/G/02/Gateway/Events/GW_SpringSale21/XCM_CUTTLE_1311992_1602205_UK_3701519_186x116_1X_en_GB._SY116_CB658947444_.jpg" 
                        alt="Home & Kitchen"  
                        className="summersale__grid-item-img" 
                    />
                    <span>Home & Kitchen</span>
                </div>
                <div className="summersale__grid-item">
                    <img 
                        src="https://www.amazon.co.uk/images/G/02/Gateway/Events/GW_SpringSale21/XCM_CUTTLE_1311992_1602195_UK_3701481_186x116_1X_en_GB._SY116_CB658947439_.jpg" 
                        alt="Beauty" 
                        className="summersale__grid-item-img" 
                    />
                    <span>Beauty</span>
                </div>
                <div className="summersale__grid-item">
                    <img 
                        src="https://www.amazon.co.uk/images/G/02/Gateway/Events/GW_SpringSale21/XCM_CUTTLE_1311992_1602214_UK_3701559_186x116_1X_en_GB._SY116_CB658947444_.jpg" 
                        alt="Pet Products" 
                        className="summersale__grid-item-img" 
                    />
                    <span>Pet Products</span>
                </div>
                <div className="summersale__grid-item">
                    <img 
                        src="https://www.amazon.co.uk/images/G/02/Gateway/Events/GW_SpringSale21/XCM_CUTTLE_1311992_1602200_UK_3701545_186x116_1X_en_GB._SY116_CB658947439_.jpg" 
                        alt="Computers & Software" 
                        className="summersale__grid-item-img" 
                    />
                    <span>Computers & Software</span>
                </div>
            </div>
            <a href="">See all deals</a>
        </div>
    )
}

export default SummerSale
