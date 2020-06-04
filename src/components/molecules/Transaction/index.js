import React from 'react';
import { get } from 'lodash';
import './styles.scss';

// Assets
import AddToWallet from '../../../Assets/add-money-min.png';
import RemoveFromWallet from '../../../Assets/join-a-paid-contest.png';
// Joined Contest image is not given
import JoinedContest from '../../../Assets/join-a-paid-contest.png';

const Transaction = ({transaction}) => {
    const amount = get(transaction, 'amount', 0);
    const type = get(transaction, 'type', '');
    const status = get(transaction, 'status', 'failed');

    const getStatusText = status => {
        return status === 'success'
            ? 'Add money successfully'
            : 'Transaction failed'
    }

    const getWalletImage = type => {
        switch(type){
            case 'add_to_wallet': 
                return AddToWallet;
            case 'remove_from_wallet':
                return RemoveFromWallet;
            case 'join_contest':
                return JoinedContest;
            default:
                return RemoveFromWallet;
        }
    }

    return (
        <div className="transaction">
            <div className="transaction-amount">
                <p className="amount">&#8377;{amount}</p>
                <img src={getWalletImage(type)} alt="transaction-wallet"/>
            </div>
            <p className="transaction-summary">{getStatusText(status)}</p>
        </div>
    )
}

export default Transaction;
