import React, { Component } from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../css/Carousel.css'

const track = document.querySelector('.carousel__track');


class Carousel extends Component {
    render() {
        return (
            <div className="carousel">
                <button className="carousel__button carousel__button--left">
                    <ChevronLeftIcon className="carousel__button-chevron"/>
                </button>
                <div className="carousel__track-container">
                    <ul className="carousel__track">
                        <li className="carousel__slide">
                            <img 
                                className="carousel__image"
                                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheTomorrowWar/TWAR_2021_GWBleedingHero_ENG_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB665379733_.jpg" 
                                alt="Prime Video" 
                            />
                        </li>
                        <li className="carousel__slide">
                            <img 
                                className="carousel__image"
                                src="https://www.amazon.co.uk/images/I/71FYkxOWblL._SX3000_.jpg" 
                                alt="Amazon Music" 
                            />
                        </li>
                        <li className="carousel__slide">
                            <img 
                                className="carousel__image"
                                src="https://www.amazon.co.uk/images/I/614lnowq5AL._SX3000_.jpg" 
                                alt="End of Summer Sale" 
                            />
                        </li>
                        <li className="carousel__slide">
                            <img 
                                className="carousel__image"
                                src="https://www.amazon.co.uk/images/I/71Rm020rFbL._SX3000_.png" 
                                alt="Amazon Prime Students Offer" 
                            />
                        </li>
                    </ul>
                </div>
                <button className="carousel__button carousel__button--right">
                    <ChevronRightIcon className="carousel__button-chevron" />
                </button>
            </div>
        )
    }
}

export default Carousel
