import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = ({header, subHeader, back, backUrl, align="center"}) => {
    const styles = {
        textAlign: align
    }

    return (
        <>
            <div className="header-container" style={styles}>
                <div className="header-texts">
                    {header && <p className="text">{header}</p>}
                    {subHeader && <p className="sub-text">{subHeader}</p>}
                </div>
                {back && <Link to={backUrl}><img src={require('../../../Assets/back@3x-min.png')} className="back" alt="back" /></Link>}
            </div>
        </>
    )
}

export default Header;