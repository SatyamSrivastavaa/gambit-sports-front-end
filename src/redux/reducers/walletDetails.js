import { GET_WALLET_DETAILS }  from '../types'; 

const initialState = {
    walletBalance: 0,
    transactions: [],
    withdrawals: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_WALLET_DETAILS:
            return {
                ...state,
                transactions: action.payload.transactions,
                walletBalance: action.payload.walletBalance,
                withdrawals: action.payload.withdrawals
            }
        default:
            return {
                ...state
            }
    }
}