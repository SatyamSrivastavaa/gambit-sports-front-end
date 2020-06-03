import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

// Redux
import { getWalletDetails } from '../../../redux/actions/walletDetails';

// Components
import Header from '../../molecules/Header';

const Transactions = ({getWalletDetails}) => {
    useEffect(() => {
        getWalletDetails();
    }, []);

    return (
        <>
            <Header header="Transaction History" backUrl="/home" back />
        </>
    )
}


const mapStateToProps = state => {
    return {
        landing: state.landing
    }
}

const mapDispatchToProps = {
    getWalletDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
