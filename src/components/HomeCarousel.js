import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class HomeCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img 
                        className='home__image'
                        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TWAR_2021_GWBleedingHero_ENG_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB665379733_.jpg" 
                        alt="Prime Video" 
                    />
                </div>
            </Carousel>
        )
    }
}

export default HomeCarousel
