import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './styles.scss';

// Components
import Challenge from '../Challenge';

const Challenges = ({ challenges, active, activeTabId }) => {
    const [filteredChallenges, setFilteredChallenges] = useState([]);

    useEffect(() => {
        setFilteredChallenges(filteredChallenges => challenges.filter(challenge => challenge.sports_id === activeTabId));
    }, [challenges, active, activeTabId]);
    
    return (
        <div className="challenges-container">
            <p className="challenges-header">{`${active} (${filteredChallenges.length})`}</p>
            {
                filteredChallenges.length > 0
                    ? filteredChallenges.map((challenge, index) => <Challenge key={index} challenge={challenge} />)
                    : <p className="no-challenges">No Active Challenges.</p>
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

export default connect(mapStateToProps, null)(Challenges);