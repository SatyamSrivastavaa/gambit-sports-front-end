import React from 'react';
import './styles.scss';

const Button = ({text='', primary, outlined}) => {
    let className = 'primary';
    if(outlined){
        className = 'outlined';
    }

    return (
        <div className={className}>{text}</div>
    )
}

export default Button;
