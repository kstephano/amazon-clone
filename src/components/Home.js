import React from 'react'

import '../css/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img 
                    className='home__image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TWAR_2021_GWBleedingHero_ENG_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB665379733_.jpg" 
                    alt="Prime Video" 
                />
            <div className="home__container">
                <div className="home__grid">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home
