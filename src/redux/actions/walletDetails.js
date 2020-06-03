import axios from 'axios';
import { get } from 'lodash';
import { GET_WALLET_DETAILS } from '../types';

const generatePayload = data => {
    const walletBalance = get(data, 'wallet_balance', 0);
    const transactions = get(data, 'transactions', []);
    const withdrawals = get(data, 'withdrawals', []);

    return {
        walletBalance,
        transactions,
        withdrawals
    }
}

export const getWalletDetails = () => dispatch => {
    axios.get('/wallet')
        .then(response => {
            dispatch({
                type: GET_WALLET_DETAILS,
                payload: generatePayload(response.data)
            })
        })
        .catch(err => {
            console.log(err)
        })
}