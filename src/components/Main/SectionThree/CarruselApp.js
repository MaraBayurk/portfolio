import login from '../../../images/login.jpeg';
import calendario from '../../../images/calendario.jpeg';
import clases from '../../../images/clases.jpeg';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
            >
                <div>
                    <img src={login} alt=""/>
                </div>
                <div>
                    <img src={calendario} alt=""/>
                </div>
                <div>
                    <img src={clases} alt=""/>
                </div>
            </Carousel>
        );
    }
}
export default DemoCarousel;