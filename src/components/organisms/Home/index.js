import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import './styles.scss';
 
// Redux
import { getHomePageDetails } from '../../../redux/actions/landing';

// Components
import Header from '../../molecules/Header';
import Banners from '../../molecules/Banners';
import TabBar from '../../molecules/TabBar';
import Challenges from '../../molecules/Challenges';

const Home = ({ landing, getHomePageDetails, history }) => {
    const banners = get(landing, 'banners', []);
    const sports = get(landing, 'sports', []);
    const challenges = get(landing, 'challenges', []);
    
    useEffect(() => {
        getHomePageDetails();
    }, []);

    return (
        <>
            <Header header="Home" />
            <Banners banners={banners} history={history} />
            <TabBar tabs={sports} />
            <Challenges challenges={challenges} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        landing: state.landing
    }
}

const mapDispatchToProps = {
    getHomePageDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
