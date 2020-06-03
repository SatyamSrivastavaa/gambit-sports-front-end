import React, { useEffect } from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import './styles.scss';

// Redux
import { setActiveTab } from '../../../redux/actions/tabs';

// Components
import Tab from '../Tab';

const ContestTabs = ({tabs, active, setActiveTab}) => {
    const set = {};
    
    tabs.forEach(tab => {
        if(!set[tab.contest_type]){
            set[tab.contest_type] = 1;
        } else {
            set[tab.contest_type]++;
        }
    });


    useEffect(() => {
        const name = get(tabs[0], 'contest_type', '');
        const tabId = get(tabs[0], 'contest_type', '');

        setActiveTab(name, tabId);
    }, [tabs]);

    const renderTab = (tab, index) => {
        const filterData = () => {
            setActiveTab(tab, tab);
        }

        return  (
            <Tab 
                name={tab}
                subText={` (${set[tab]})`}
                onClick={filterData}
                tabId={index}
                activeTab={active}
            />
        )
    }

    return (
        <div className="tab-bar">
            {
                Object.keys(set).map((tab, index) => renderTab(tab))
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        active: state.tabs.active
    }
}

const mapDispatchToProps = {
    setActiveTab
}

export default connect(mapStateToProps, mapDispatchToProps)(ContestTabs);