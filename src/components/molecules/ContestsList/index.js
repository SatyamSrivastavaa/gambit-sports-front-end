import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

// Components
import Contest from '../Contest';

const ContestsList = ({ contests, active, activeTabId }) => {
    const [filteredContests, setFilteredContests] = useState([]);

    useEffect(() => {
        setFilteredContests(filteredContests => contests.filter(contest => contest.contest_type === activeTabId));
    }, [contests, active, activeTabId]);
    
    return (
        <div className="contests-container">
            <p className="contests-header">{`${active} (${filteredContests.length})`}</p>
            {
                filteredContests.length > 0
                    ? filteredContests.map(contest => <Contest contest={contest} />)
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
