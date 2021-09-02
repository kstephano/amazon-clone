import React from 'react'

import '../css/Home.css'
import TopLinks from './TopLinks'
import Product from './Product'
import GiftFinder from './GiftFinder'
import SummerSale from './SummerSale'
import Advert from './Advert'
import ContinueWatching from './ContinueWatching'
import RecommendedVideo from './RecommendedVideo'
import ProductsSmallBusinesses from './ProductsSmallBusinesses'
import EndOfSummerDeals from './EndOfSummerDeals'
import Carousel from './Carousel'
import ImageSlider from './Carousel'
import { SliderData } from '../Data/SliderData'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <div className="home__image-container">
                    <Carousel slides={SliderData}/>
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
                    </div>
                    <div className="home__grid-item home__grid-item-five">
                        <Advert />
                    </div>
                    <div className="home__grid-item home__grid-item-six">
                        <RecommendedVideo />
                        
                    </div>
                    <div className="home__grid-item home__grid-item-seven">
                        <ProductsSmallBusinesses />
                    </div>
                    <div className="home__grid-item home__grid-item-eight">
                        <EndOfSummerDeals />
                    </div>
                    <div className="home__grid-item home__grid-item-nine">
                         <Product 
                            title='JVC Fire TV 40" Smart Full HD LEDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                            price={180.99}
                            rating={4.5}
                            image="https://m.media-amazon.com/images/I/61sSAuEPVPL._AC_SL1000_.jpg" 
                            productCount={1903}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
