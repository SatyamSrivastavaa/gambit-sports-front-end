import React from 'react';
import './styles.scss';
import { get } from 'lodash';

const Banner = ({ banner, history }) => {
    const imgUrl = get(banner, 'img_url', '');
    const redirect = get(banner, 'redirect', false);
    const route = get(banner, 'route', '/home');
    let style = {
        backgroundImage: `url(${imgUrl})`,
        cursor: redirect ? 'pointer' : 'not-allowed'
    };

    return (
        <li 
            className="banner"
            style={style}
            onClick={() => {
                if(redirect){
                    history.push(route);
                }
            }}
        >
        </li>
    )
}

export default Banner;