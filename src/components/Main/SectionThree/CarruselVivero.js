import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import lasrosashome from '../../../images/lasrosashome.jpeg';
import lasrosaslogin from '../../../images/lasrosasloginn.jpeg';
import lasrosasproduct from '../../../images/lasrosasproduct.jpeg';


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
                    <img src={lasrosashome} alt="" />
                </div>
                <div>
                    <img src={lasrosaslogin} alt="" />
                </div>
                <div>
                    <img src={lasrosasproduct} alt=""/>
                </div>
            </Carousel>
        );
    }
}
export default DemoCarousel;