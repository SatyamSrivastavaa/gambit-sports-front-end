import React, { useEffect } from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import './styles.scss';

// Redux
import { setActiveTab } from '../../../redux/actions/tabs';

// Components
import Tab from '../Tab';

const TabBar = ({tabs, active, setActiveTab}) => {
    useEffect(() => {
        const name = get(tabs[0], 'sports_name', '');
        const tabId = get(tabs[0], 'sports_id', '');

        setActiveTab(name, tabId);
    }, [tabs]);

    const renderTab = tab => {
        const tabId = get(tab, 'sports_id', '');
        const name = get(tab, 'sports_name', '');
        const imgUrl = get(tab, 'sports_img_url', '');
        const filterData = () => {
            setActiveTab(name, tabId);
        }

        return  (
            <Tab 
                name={name}
                imgUrl={imgUrl}
                onClick={filterData}
                tabId={tab.sports_id}
                activeTab={active}
            />
        )
    }

    return (
        <div className="tab-bar">
            {
                tabs.map(tab => renderTab(tab))
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

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);