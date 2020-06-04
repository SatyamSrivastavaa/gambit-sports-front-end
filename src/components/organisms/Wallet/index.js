import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import './styles.scss';

// Redux
import { getWalletDetails } from '../../../redux/actions/walletDetails';

// Components
import Card from '../../atoms/Card';
import Header from '../../molecules/Header';
import Withdrawals from '../../molecules/Withdrawals';
import Transactions from '../../molecules/Transactions';

const Wallet = ({wallet, getWalletDetails}) => {
    const walletBalance = get(wallet, 'walletBalance', 0);
    const transactions= get(wallet, 'transactions', []);
    const withdrawals= get(wallet, 'withdrawals', []);
    const withdrawalsInprogress = withdrawals.filter(withdrawal => withdrawal.status === 'in_progress');
    
    useEffect(() => {
        getWalletDetails();
    }, []);

    const getBalanceText = () => {
        return (
            <>
                <span>{`TOTAL BALANCE `}</span>
                <span>&#8377;{walletBalance}</span>
            </>
        )
    }

    return (
        <>
            <Header header="Transaction History" backUrl="/home" back />
            <div className="wallet-info-container">
                <Card 
                    text={getBalanceText()}
                    subText={`${withdrawalsInprogress.length} withdrawal in progress`}
                />
                {withdrawalsInprogress.length > 0 && <Withdrawals withdrawals={withdrawalsInprogress} />}
                {transactions.length > 0 && <Transactions transactions={transactions} />}
            </div>
        </>
    )
}


const mapStateToProps = state => {
    return {
        wallet: state.walletDetails
    }
}

const mapDispatchToProps = {
    getWalletDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
