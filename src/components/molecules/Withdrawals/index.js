import React from 'react';
import './styles.scss';

// Components
import Withrawal from '../Withdrawal';

const Withdrawals = ({withdrawals}) => {
    
    return (
        <div calssName="withrawals">
            {
                withdrawals.map((withdrawal, index) => <Withrawal key={index} withdrawal={withdrawal} />)
            }
        </div>
    )
}

export default Withdrawals;
