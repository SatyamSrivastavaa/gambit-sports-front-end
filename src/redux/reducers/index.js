import { combineReducers } from 'redux';

// reducers
import contests from './contests';
import walletDetails from './walletDetails';
import landing from './landing';
import tabs from './tabs';

export default combineReducers({
    contests,
    walletDetails,
    landing,
    tabs
});