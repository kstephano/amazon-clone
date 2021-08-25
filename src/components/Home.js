import React from 'react'

import '../css/Home.css'
import TopLinks from './TopLinks'
import Product from './Product'
import GiftFinder from './GiftFinder'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <div className="home__image-container">
                    <img 
                        className='home__image'
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TWAR_2021_GWBleedingHero_ENG_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB665379733_.jpg" 
                        alt="Prime Video" 
                    />
                </div>
                <div className="home__grid">
                    <div className="home__grid-item home__grid-item-one">
                        <TopLinks />
                    </div>
                    <div className="home__grid-item home__grid-item-two">
                        <Product />
                    </div>
                    <div className="home__grid-item home__grid-item-three">
                        <Product />
                    </div>
                    <div className="home__grid-item home__grid-item-four">
                        <GiftFinder />
                    </div>
                    <div className="home__grid-item home__grid-item-five">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home