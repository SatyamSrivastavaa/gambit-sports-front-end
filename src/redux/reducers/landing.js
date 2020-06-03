import { GET_LANDING_PAGE_DETAILS }  from '../types'; 

const initialState = {
    userName: '',
    banners: [],
    sports: [],
    challenges: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_LANDING_PAGE_DETAILS:
            return {
                ...state,
                userName: action.payload.userName,
                banners: action.payload.banners,
                sports: action.payload.sports,
                challenges: action.payload.challenges
            }
        default:
            return {
                ...state
            }
    }
}