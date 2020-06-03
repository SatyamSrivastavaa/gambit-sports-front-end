import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './styles.scss';

// Components
import Banner from '../../atoms/Banner'

const Banners = ({ banners, history }) => {
    return (
        <div className="banner-container">
            <Carousel autoPlay={5000} >
                {
                    banners.map(banner => <Banner banner={ banner } history={history} />)
                }
            </Carousel>
        </div>
    )
}

export default Banners;