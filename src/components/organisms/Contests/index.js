import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Redux
import { getContests } from '../../../redux/actions/contests';

// Components
import Header from '../../molecules/Header';
import ContestTabs from '../../molecules/ContestTabs';
import ContestsList from '../../molecules/ContestsList';

const Contests = ({contests, getContests}) => {    
    useEffect(() => {
        getContests();
    }, []);
    
    return (
        <>
            <Header 
                header="Choose a contest"
                subHeader="01h 51m 21s"
                align="left"
                backUrl="/home" 
                back
            />
            <ContestTabs tabs={contests} />
            <ContestsList contests={contests} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        contests: state.contests.contestsList
    }
}

const mapDispatchToProps = {
    getContests
}


export default connect(mapStateToProps, mapDispatchToProps)(Contests);


