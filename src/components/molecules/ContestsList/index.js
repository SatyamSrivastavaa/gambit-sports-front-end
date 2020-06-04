import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

// Components
import Contest from '../Contest';
import Button from '../../atoms/Button';

const ContestsList = ({ contests, active, activeTabId }) => {
    const [filteredContests, setFilteredContests] = useState([]);

    useEffect(() => {
        if(active === 'All'){
            setFilteredContests(filteredContests => contests);
        } else {
            setFilteredContests(filteredContests => contests.filter(contest => contest.contest_type === activeTabId));
        }
    }, [contests, active, activeTabId]);
    
    return (
        <div className="contests-container">
            <div className="contest-header-wrapper">
                <div>
                    <p className="contests-header">{`${active} Contests`}</p>
                    <p className="contest-sub-header">Different types of contest in one place</p>
                </div>
                <Button text="Contest Info" outlined/>
            </div>
            {
                filteredContests.length > 0
                    ? filteredContests.map((contest, index) => <Contest key={index} contest={contest} />)
                    : <p className="no-contests">No Active Contests.</p>
            } 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        active: state.tabs.active,
        activeTabId: state.tabs.tabId
    }
}

export default connect(mapStateToProps, null)(ContestsList);
