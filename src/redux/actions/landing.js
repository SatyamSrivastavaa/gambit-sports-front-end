import axios from 'axios';
import { get } from 'lodash';
import { GET_LANDING_PAGE_DETAILS } from '../types';

const generatePayload = data => {
    const userName = get(data, 'user_name', 0);
    const banners = get(data, 'banners', []);
    const sports = get(data, 'sports', []);
    const challenges = get(data, 'challenges', []);

    return {
        userName,
        banners,
        sports,
        challenges
    }
}

export const getHomePageDetails = () => dispatch => {
    axios.get('/home')
        .then(response => {
            dispatch({
                type: GET_LANDING_PAGE_DETAILS,
                payload: generatePayload(response.data)
            })
        })
        .catch(err => {
            console.log(err)
        })
}