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
            transitionTime={0}

            >
                <div>
                    <img src={login} alt="login"/>
                </div>
                <div>
                    <img src={calendario} alt="calendar"/>
                </div>
                <div>
                    <img src={clases} alt="class"/>
                </div>
            </Carousel>
        );
    }
}
export default DemoCarousel;