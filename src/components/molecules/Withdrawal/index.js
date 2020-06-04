import React from 'react';
import './styles.scss';

const Withdrawal = ({withdrawal}) => {
    return (
        <div className="withrawal">
            <img src={require('../../../Assets/withdrawal.png')} alt="wallet-icon"/>
            <div className="withdrawals-info">
                <p className="in-progress">&#8377;{withdrawal.amount} withdrawal in progress..</p>
                <p className="withdraw-sub-text">withdrawn from your winnings</p>
            </div>
        </div>
    )
}

export default Withdrawal;
