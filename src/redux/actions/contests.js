import axios from 'axios';
import { GET_CONTESTS } from '../types';

export const getContests = () => dispatch => {
    axios.get('/contest')
        .then(response => {
            dispatch({
                type: GET_CONTESTS,
                payload: response.data.contests
            })
        })
        .catch(err => {
            console.log(err)
        })
}