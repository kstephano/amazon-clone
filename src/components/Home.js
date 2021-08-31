import React from 'react'

import '../css/Home.css'
import TopLinks from './TopLinks'
import Product from './Product'
import GiftFinder from './GiftFinder'
import SummerSale from './SummerSale'
import Advert from './Advert'
import ContinueWatching from './ContinueWatching'

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
                        <SummerSale />
                    </div>
                    <div className="home__grid-item home__grid-item-three">
                        <ContinueWatching 
                            title="The Office [US] - Season 8"
                            image="https://www.amazon.co.uk/images/I/91BJXiVqJFL._SL260_.jpg"
                        />
                    </div>
                    <div className="home__grid-item home__grid-item-four">
                        <GiftFinder />
                        <Advert />
                    </div>
                    <div className="home__grid-item home__grid-item-five">
                        <Product 
                            title='JVC Fire TV 40" Smart Full HD LED'
                            price={180.99}
                            rating={4.5}
                            image="https://m.media-amazon.com/images/I/61sSAuEPVPL._AC_SL1000_.jpg" 
                            productCount={1903}
                        />
                    </div>
                    <div className="home__grid-item home__grid-item-six">
                        <Advert />
                    </div>
                    <div className="home__grid-item home__grid-item-seven">
                        <Advert />
                    </div>
                    <div className="home__grid-item home__grid-item-eight">
                        <Advert />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
