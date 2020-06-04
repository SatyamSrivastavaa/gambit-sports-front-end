import React from 'react';
import './styles.scss';

const Card = ({text='', subText=''}) => {
    return (
        <div className="card">
            <p className="card-text">{text}</p>
            <p className="card-sub-text">{subText}</p>
        </div>
    )
}

export default Card;
