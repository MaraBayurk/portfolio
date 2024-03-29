import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import home from '../../../images/home.jpeg';
import catalogue from '../../../images/catalogue.jpeg';
import checkout from '../../../images/checkout.jpeg';


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel 
            autoPlay={true}
            interval={1500}
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            transitionTime={0}
            >
                <div>
                    <img src={home} alt="home" />
                </div>
                <div>
                    <img src={catalogue} alt="catalogue" />
                </div>
                <div>
                    <img src={checkout} alt="checkout"/>
                </div>
            </Carousel>
        );
    }
}
export default DemoCarousel;