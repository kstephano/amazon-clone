import React from 'react'

import '../css/ProductsSmallBusinesses.css'

function ProductsSmallBusinesses() {
    return (
        <div className="products-s-b__container">
            <div className="products-s-b__header">
                <h1>Products from small businesses</h1>
            </div>
            <div className="products-s-b__body">
                <div className="products-s-b__grid">
                    <div className="products-s-b__grid-item">
                        <img 
                            src="https://www.amazon.co.uk/images/G/02/EUBluefield/Build_Trust/Ratatouille_Focus/XCM_Manual_1356469_fr_brand_truth_smb_1_186x116_1cc18dc1-8537-4375-8382-77c7712a63c0._SY116_CB643213344_.jpg" 
                            alt="Home & Kitchen" 
                            className="products-s-b__image"
                        />
                        <p>Home & Kitchen</p>
                    </div>
                    <div className="products-s-b__grid-item">
                        <img 
                            src="https://www.amazon.co.uk/images/G/02/EUBluefield/Build_Trust/Ratatouille_Focus/XCM_Manual_1356469_fr_brand_truth_smb_4_186x116_4ddc89da-8bd3-4262-ab98-e75a4021d3b2._SY116_CB643213344_.jpg" 
                            alt="Beauty & Personal Care" 
                            className="products-s-b__image" 
                        />
                        <p>Beauty & Personal Care</p>
                    </div>
                    <div className="products-s-b__grid-item">
                        <img 
                            src="https://www.amazon.co.uk/images/G/02/EUBluefield/Build_Trust/Ratatouille_Focus/XCM_Manual_1356469_fr_brand_truth_smb_3_186x116_12900bc0-9fa6-47b0-8b5f-f2b72d4c56a4._SY116_CB643213345_.jpg" 
                            alt="Toys & Games" 
                            className="products-s-b__image" 
                        />
                        <p>Toys & Games</p>
                    </div>
                    <div className="products-s-b__grid-item">
                        <img 
                            src="https://www.amazon.co.uk/images/G/02/EUBluefield/Build_Trust/Ratatouille_Focus/XCM_Manual_1356469_fr_brand_truth_smb_2_186x116_2dd86b40-8f83-4051-b6a5-32cede400819._SY116_CB643213345_.jpg" 
                            alt="Electronics" 
                            className="products-s-b__image" 
                        />
                        <p>Electronics</p>
                    </div>
                </div>
            </div>
            <div className="products-s-b__footer">
                <a href="">See more</a>
            </div>
        </div>
    )
}

export default ProductsSmallBusinesses
