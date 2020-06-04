import React from 'react';
import './styles.scss';

// Components
import Transaction from '../Transaction';

const Transactions = ({transactions}) => {
    const addToWalleTransactions = transactions.filter(transaction => transaction.type === 'add_to_wallet');
    const removeFromWalleTransactions = transactions.filter(transaction => transaction.type === 'remove_from_wallet');
    const joinedContestWalleTransactions = transactions.filter(transaction => transaction.type === 'join_contest');

    return (
        <div className="transactions">
            {
                addToWalleTransactions.map((transaction, index) => <Transaction key={index} transaction={transaction}/>)
            }
            {
                removeFromWalleTransactions.map((transaction, index) => <Transaction key={index} transaction={transaction}/>)
            }
            {
                joinedContestWalleTransactions.map((transaction, index) => <Transaction key={index} transaction={transaction}/>)
            }
        </div>
    )
}

export default Transactions;
