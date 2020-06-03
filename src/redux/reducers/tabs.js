import { SET_ACTIVE_TAB }  from '../types'; 

const initialState = {
    active: '',
    tabId: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_ACTIVE_TAB:
            return {
                ...state,
                active: action.payload.name,
                tabId: action.payload.tabId
            }
        default:
            return {
                ...state
            }
    }
}