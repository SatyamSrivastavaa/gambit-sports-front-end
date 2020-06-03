import { SET_ACTIVE_TAB } from '../types';

export const setActiveTab = (name, tabId) => dispatch => {
    dispatch({
        type: SET_ACTIVE_TAB,
        payload: {
            name,
            tabId
        }
    });
}