import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/1.jpg'
import img2 from './images/2.webp'
import img3 from './images/3.webp'
import img4 from './images/4.webp'


class DemoCarousel extends Component {

    render() {

        return (
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;