import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import lasrosas from '../../../images/lasrosas.jpeg';
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
                    <img src={lasrosas} alt="" />
                </div>
                {/* <div>
                    <img src={catalogue} alt="" />
                </div>
                <div>
                    <img src={checkout} alt=""/>
                </div> */}
            </Carousel>
        );
    }
}
export default DemoCarousel;