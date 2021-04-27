import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import uno from '../../../images/formReactNative/uno.jpeg';
import dos from '../../../images/formReactNative/dos.jpeg';
import tres from '../../../images/formReactNative/tres.jpeg';
import cuatro from '../../../images/formReactNative/cuatro.jpeg';


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
                    <img src={uno} alt="form" />
                </div>
                <div>
                    <img src={dos} alt="calendar" />
                </div>
                <div>
                    <img src={tres} alt="form-complete"/>
                </div>
                <div>
                    <img src={cuatro} alt="send"/>
                </div>
            </Carousel>
        );
    }
}
export default DemoCarousel;