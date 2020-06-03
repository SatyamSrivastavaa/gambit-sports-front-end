import { GET_CONTESTS }  from '../types'; 

const initialState = {
    contestsList: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_CONTESTS:
            return {
                ...state,
                contestsList: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}