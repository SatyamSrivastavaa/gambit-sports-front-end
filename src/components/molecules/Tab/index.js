import React from 'react';
import './styles.scss';

const Tab = ({name='', subText='', imgUrl='', onClick, tabId='', activeTab}) => {
    return (
        <li 
            className={`tabs ${activeTab === name ? 'active' : ''}`}
            onClick={onClick}
            key={tabId}
        >
            <div className="tab-info-container">
                {imgUrl && <img className="tab-image" src={imgUrl} alt={name} />}
                <p>
                    {name}
                    {subText && <span>{subText}</span>}
                </p>
            </div>
        </li>
    )
}

export default Tab;
