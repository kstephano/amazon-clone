import React, { useState } from 'react'
import { SliderData } from '../Data/SliderData'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import '../css/Carousel.css'

const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="carousel">
            <button className="carousel__button carousel__button--left" onClick={prevSlide}>
                <ChevronLeftIcon className="carousel__button-chevron" stroke={"white"} stroke-width={.5}/>
            </button>

            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'carousel__slide-active' : 'carousel__slide'} key={index}>
                        {index === current && (
                            <img className="carousel__image" src={slide.image} alt="Main advertisement" />
                        )}
                    </div>
                    
                )
            })}
            
            <button className="carousel__button carousel__button--right" onClick={nextSlide}>
                <ChevronRightIcon className="carousel__button-chevron" stroke={"white"} stroke-width={.5}/>
            </button>
        </div>
    )
}

export default ImageSlider
